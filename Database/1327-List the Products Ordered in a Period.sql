-- Write your PostgreSQL query statement below
SELECT p.product_name, SUM(o.unit) AS unit
FROM Products p
JOIN Orders o
ON p.product_id = o.product_id
WHERE o.order_date >= DATE '2020-02-01'
AND o.order_date < DATE '2020-03-01'
GROUP BY p.product_id, p.product_name
HAVING SUM(o.unit) >= 100;


-- WHERE
--  ↓
-- Filter rows

-- GROUP BY
--  ↓
-- Create groups

-- SUM()
--  ↓
-- Calculate total

-- HAVING
--  ↓
-- Filter groups
-- Easy rule:

-- WHERE → before GROUP BY
-- HAVING → after GROUP BY