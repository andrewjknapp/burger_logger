USE burger_db;

UPDATE burgers
SET status = 'eaten'
WHERE id = 3;

SELECT id, type 
FROM burgers
WHERE status = 'pending';

SELECT id, type 
FROM burgers
WHERE status = 'eaten';