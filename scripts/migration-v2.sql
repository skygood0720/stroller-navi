-- ============================================
-- ベビーカーナビ 追加テーブル
-- お気に入り・ユーザー投稿スポット
-- ============================================
-- Supabase SQL Editor で実行してください

-- お気に入り
CREATE TABLE IF NOT EXISTS favorites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  spot_id INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, spot_id)
);

-- ユーザー投稿スポット
CREATE TABLE IF NOT EXISTS user_spots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  tags TEXT[] DEFAULT '{}',
  "desc" TEXT NOT NULL,
  submitted_by TEXT NOT NULL DEFAULT 'anonymous',
  submitted_by_name TEXT NOT NULL DEFAULT '匿名',
  status TEXT NOT NULL DEFAULT 'approved' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- インデックス
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_spot_id ON favorites(spot_id);
CREATE INDEX IF NOT EXISTS idx_user_spots_status ON user_spots(status);
CREATE INDEX IF NOT EXISTS idx_user_spots_created_at ON user_spots(created_at DESC);

-- RLS
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_spots ENABLE ROW LEVEL SECURITY;

-- favorites: 自分のお気に入りのみ読み書き可能
CREATE POLICY "Users can read own favorites"
  ON favorites FOR SELECT USING (auth.uid()::text = user_id);
CREATE POLICY "Users can insert own favorites"
  ON favorites FOR INSERT WITH CHECK (auth.uid()::text = user_id);
CREATE POLICY "Users can delete own favorites"
  ON favorites FOR DELETE USING (auth.uid()::text = user_id);

-- user_spots: 承認済みは誰でも読める、認証ユーザーは投稿可能
CREATE POLICY "Anyone can read approved spots"
  ON user_spots FOR SELECT USING (status = 'approved');
CREATE POLICY "Authenticated users can submit spots"
  ON user_spots FOR INSERT WITH CHECK (auth.role() = 'authenticated');

