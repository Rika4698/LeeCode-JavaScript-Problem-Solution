-- Write your PostgreSQL query statement below
SELECT user_id, name, mail
FROM Users
WHERE mail ~ '^[A-Za-z][A-Za-z0-9_.-]*@leetcode[.]com$';


-- এখানে WHERE প্রতিটি row-এর email check করে। ~ হলো PostgreSQL-এর case-sensitive regular-expression matching operator।

-- সহজভাবে:
-- Email matches the pattern?
--           |
--       +---+---+
--       |       |
--      Yes      No
--       |       |
--     Return   Skip


-- * মানে আগের character set থেকে শূন্য বা তার বেশি character থাকতে পারে।