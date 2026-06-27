-- おでかけ日記テーブル
-- Supabase ダッシュボードの SQL Editor で実行してください

CREATE TABLE IF NOT EXISTS diary_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  device_id TEXT NOT NULL,        -- ブラウザの匿名デバイスID
  room_code TEXT,                 -- 家族共有コード（任意）
  spot_id INTEGER,                -- スポットID（任意）
  spot_name TEXT NOT NULL,        -- スポット名（自由入力も可）
  entry_date DATE NOT NULL DEFAULT CURRENT_DATE,
  memo TEXT DEFAULT '',
  sticker TEXT DEFAULT '🌸',      -- 絵文字スタンプ
  baby_month INTEGER,             -- 記録時の赤ちゃんの月齢
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE diary_entries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "diary_entries_all" ON diary_entries FOR ALL USING (true);

-- インデックス
CREATE INDEX IF NOT EXISTS idx_diary_device_id ON diary_entries(device_id);
CREATE INDEX IF NOT EXISTS idx_diary_room_code ON diary_entries(room_code);
CREATE INDEX IF NOT EXISTS idx_diary_entry_date ON diary_entries(entry_date DESC);
