# Write your MySQL query statement below
SELECT contest_id, 
        ROUND(
            COUNT(user_id) * 100.0 /
            (SELECT COUNT(*) FROM Users), 2
        ) AS percentage

FROM Register
GROUP BY contest_id
ORDER BY  percentage DESC, contest_id ASC;        

-- COUNT() function কোনো column-এর non-NULL value গুনে।

-- (SELECT COUNT(*) FROM Users)


-- এটি একটি Subquery।
-- Subquery কী?
-- একটি SQL query-এর ভেতরে আরেকটি SQL query থাকলে তাকে Subquery বলে।