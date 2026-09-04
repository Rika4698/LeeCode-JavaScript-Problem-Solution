-- Write your PostgreSQL query statement below
SELECT id, COUNT(*) AS num
FROM (
    SELECT requester_id AS id 
    FROM RequestAccepted

    UNION ALL
    SELECT  accepter_id AS id
    FROM RequestAccepted
) AS friend
GROUP BY id 
ORDER BY num DESC


-- দুই column
--    ↓
-- UNION ALL
--    ↓
-- এক column
--    ↓
-- GROUP BY
--    ↓
-- COUNT
--    ↓
-- ORDER BY DESC
--    ↓
-- LIMIT 1