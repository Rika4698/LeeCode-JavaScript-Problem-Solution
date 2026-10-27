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


-- [.] Regex-এ square brackets-এর বাইরে . সাধারণত যেকোনো একটি character বোঝায়। কিন্তু [.] ব্যবহার করলে এটি আসল period character-কে বোঝায়।

-- com$ — email-এর শেষ
-- com$


-- $ email string-এর শেষ নির্দেশ করে।

-- তাই @leetcode.com-এর পরে অতিরিক্ত character থাকলে পুরো pattern match করবে না।