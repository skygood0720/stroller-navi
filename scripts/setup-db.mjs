/**
 * ベビーカーナビ - Supabase データベースセットアップスクリプト
 *
 * 使い方:
 *   1. Supabase ダッシュボードの SQL Editor にコピー&ペーストして実行
 *   2. または: node scripts/setup-db.mjs
 *
 * 前提: .env.local に NEXT_PUBLIC_SUPABASE_URL と SUPABASE_SERVICE_ROLE_KEY を設定済み
 */

const SQL = `
-- ============================================
-- 1. テーブル作成
-- ============================================

-- 赤ちゃんプロフィール
CREATE TABLE IF NOT EXISTS baby_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  birth_date DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 口コミ・評価
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  spot_id INTEGER NOT NULL,
  user_id TEXT,
  user_name TEXT NOT NULL DEFAULT '匿名',
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  baby_age TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- スポットの評価サマリー（キャッシュ用）
CREATE TABLE IF NOT EXISTS spot_rating_summary (
  spot_id INTEGER PRIMARY KEY,
  avg_rating NUMERIC(2,1) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- 2. インデックス
-- ============================================

CREATE INDEX IF NOT EXISTS idx_reviews_spot_id ON reviews(spot_id);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reviews_user_id ON reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_baby_profiles_user_id ON baby_profiles(user_id);

-- ============================================
-- 3. RLS (Row Level Security)
-- ============================================

ALTER TABLE baby_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE spot_rating_summary ENABLE ROW LEVEL SECURITY;

-- baby_profiles: 自分のプロフィールのみ読み書き可能
CREATE POLICY "Users can read own baby profile"
  ON baby_profiles FOR SELECT
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can insert own baby profile"
  ON baby_profiles FOR INSERT
  WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can update own baby profile"
  ON baby_profiles FOR UPDATE
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can delete own baby profile"
  ON baby_profiles FOR DELETE
  USING (auth.uid()::text = user_id);

-- reviews: 誰でも読める、認証ユーザーは投稿可能
CREATE POLICY "Anyone can read reviews"
  ON reviews FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert reviews"
  ON reviews FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can delete own reviews"
  ON reviews FOR DELETE
  USING (auth.uid()::text = user_id);

-- spot_rating_summary: 誰でも読める
CREATE POLICY "Anyone can read spot summaries"
  ON spot_rating_summary FOR SELECT
  USING (true);

-- ============================================
-- 4. トリガー: レビュー投稿時に評価サマリー更新
-- ============================================

CREATE OR REPLACE FUNCTION update_spot_rating_summary()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO spot_rating_summary (spot_id, avg_rating, total_reviews, updated_at)
  SELECT
    NEW.spot_id,
    ROUND(AVG(rating)::numeric, 1),
    COUNT(*),
    now()
  FROM reviews
  WHERE spot_id = NEW.spot_id
  ON CONFLICT (spot_id) DO UPDATE SET
    avg_rating = EXCLUDED.avg_rating,
    total_reviews = EXCLUDED.total_reviews,
    updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_update_rating_summary ON reviews;
CREATE TRIGGER trg_update_rating_summary
  AFTER INSERT OR DELETE ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_spot_rating_summary();

-- ============================================
-- 5. updated_at 自動更新トリガー
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_baby_profiles_updated_at ON baby_profiles;
CREATE TRIGGER trg_baby_profiles_updated_at
  BEFORE UPDATE ON baby_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 6. 初期データ（サンプル口コミ）
-- ============================================

INSERT INTO reviews (spot_id, user_id, user_name, rating, text, baby_age) VALUES
  (1, 'sample-user-1', 'ゆうママ', 5, '授乳室がとても綺麗で広いです。ミルク用のお湯も完備。', '5ヶ月'),
  (1, 'sample-user-2', 'けんパパ', 4, 'エレベーターが混むことがあるけど、全体的にベビーカーで回りやすい。', '10ヶ月'),
  (5, 'sample-user-3', 'あいママ', 5, '9Fのベビー休憩室が最高！体重計もあって助かります。', '3ヶ月'),
  (6, 'sample-user-4', 'そうたパパ', 4, '水族館は暗めで赤ちゃんも落ち着いて見られます。授乳室も近い。', '8ヶ月'),
  (6, 'sample-user-5', 'みくママ', 5, 'ペンギンに大興奮！ベビーカーのまま入れるのが嬉しい。', '1歳4ヶ月'),
  (8, 'sample-user-6', 'りなママ', 5, 'ベビーカー貸出が無料でありがたい。授乳室も各階にあります。', '6ヶ月')
ON CONFLICT DO NOTHING;
`;

// ─── スクリプト実行部分 ───
async function main() {
  console.log("============================================");
  console.log("ベビーカーナビ DB セットアップ");
  console.log("============================================\\n");

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.log("⚠️  環境変数が設定されていません。");
    console.log("   以下のSQLをSupabaseダッシュボードのSQL Editorに貼り付けて実行してください:\\n");
    console.log(SQL);
    return;
  }

  try {
    const res = await fetch(`${url}/rest/v1/rpc/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": key,
        "Authorization": `Bearer ${key}`,
      },
      body: JSON.stringify({ query: SQL }),
    });

    if (res.ok) {
      console.log("✅ データベースセットアップ完了！");
    } else {
      console.log("⚠️  APIでの実行に失敗しました。以下のSQLを手動で実行してください:\\n");
      console.log(SQL);
    }
  } catch {
    console.log("⚠️  接続に失敗しました。以下のSQLを手動で実行してください:\\n");
    console.log(SQL);
  }
}

main();
