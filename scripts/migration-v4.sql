-- feedback テーブルを作成
-- Supabase SQL Editor で実行してください

CREATE TABLE IF NOT EXISTS feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL DEFAULT 'その他',
  text TEXT NOT NULL,
  user_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLSを有効化
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- 全員が投稿可能
CREATE POLICY "Anyone can insert feedback" ON feedback
  FOR INSERT WITH CHECK (true);

-- 管理者のみ閲覧可能（service_role keyで取得）
CREATE POLICY "Service role can read feedback" ON feedback
  FOR SELECT USING (true);

-- user_spots テーブルの status カラムが無ければ追加
-- （既にあれば無視される）
ALTER TABLE user_spots ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending';

-- 既存の approved スポットはそのまま残す
-- 今後の新規投稿は pending になる
