-- Add info_count column to cpfs table
-- This column stores a fixed random number (18-27) per search_id
-- to provide consistent information count display across page loads

ALTER TABLE cpfs
ADD COLUMN IF NOT EXISTS info_count INTEGER;

-- Add a comment to document the column's purpose
COMMENT ON COLUMN cpfs.info_count IS 'Fixed random count (18-27) generated once per search, displayed on consultation page';
