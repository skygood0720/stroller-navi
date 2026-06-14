-- reviews テーブルに5つのカテゴリ別評価カラムを追加
-- Supabase SQL Editor で実行してください

ALTER TABLE reviews ADD COLUMN IF NOT EXISTS rating_stroller   SMALLINT; -- ベビーカー移動のしやすさ
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS rating_nursing    SMALLINT; -- 授乳室・おむつ替え台
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS rating_cleanliness SMALLINT; -- 清潔さ
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS rating_staff      SMALLINT; -- スタッフの対応
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS rating_kids       SMALLINT; -- 子連れのしやすさ
