-- Write your PostgreSQL query statement below
SELECT user_id, COUNT(follower_id) AS followers_count
FROM Followers
GROUP BY user_id
ORDER BY user_id;


-- Same user → GROUP BY user_id → count followers → COUNT(follower_id) → sort → ORDER BY user_id.