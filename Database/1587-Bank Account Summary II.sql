-- Write your PostgreSQL query statement below
SELECT u.name, SUM(t.amount) AS balance
FROM Users u
JOIN Transactions t
ON u.account = t.account
GROUP BY u.account, u.name
HAVING SUM(t.amount) > 10000;

-- SUM(t.amount) is an aggregate calculation.

-- WHERE filters rows before grouping.

-- HAVING filters groups after GROUP BY.


-- Think:

-- JOIN
--  ↓
-- GROUP BY
--  ↓
-- SUM()
--  ↓
-- HAVING