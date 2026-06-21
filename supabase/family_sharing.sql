-- 家族共有テーブル
-- Supabase ダッシュボードの SQL Editor で実行してください

-- 家族ルーム（コードがキー）
CREATE TABLE IF NOT EXISTS family_rooms (
  room_code TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 家族共有：離乳食チェック
CREATE TABLE IF NOT EXISTS family_weaning_checks (
  room_code TEXT NOT NULL,
  food_id TEXT NOT NULL,
  checked BOOLEAN NOT NULL DEFAULT false,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (room_code, food_id)
);

-- 家族共有：訪問済みスポット
CREATE TABLE IF NOT EXISTS family_visited_spots (
  room_code TEXT NOT NULL,
  spot_id INTEGER NOT NULL,
  visited_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (room_code, spot_id)
);

-- RLS（row_code を知っている人だけが操作できる仕組み）
ALTER TABLE family_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE family_weaning_checks ENABLE ROW LEVEL SECURITY;
ALTER TABLE family_visited_spots ENABLE ROW LEVEL SECURITY;

-- 全操作を anon キーで許可（room_code が「パスワード」代わり）
CREATE POLICY "family_rooms_all" ON family_rooms FOR ALL USING (true);
CREATE POLICY "family_weaning_checks_all" ON family_weaning_checks FOR ALL USING (true);
CREATE POLICY "family_visited_spots_all" ON family_visited_spots FOR ALL USING (true);
