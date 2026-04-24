-- reviews テーブルに photo_url カラムを追加
-- Supabase SQL Editor で実行してください
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS photo_url TEXT;
