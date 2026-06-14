-- migration-v6: visited_spots table
-- Supabase SQL Editor で実行してください

CREATE TABLE IF NOT EXISTS visited_spots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  spot_id INTEGER NOT NULL,
  visited_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, spot_id)
);

CREATE INDEX IF NOT EXISTS visited_spots_user_id_idx ON visited_spots(user_id);

-- RLS
ALTER TABLE visited_spots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own visited spots"
  ON visited_spots FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own visited spots"
  ON visited_spots FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own visited spots"
  ON visited_spots FOR DELETE USING (auth.uid() = user_id);
