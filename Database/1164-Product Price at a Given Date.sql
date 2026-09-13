-- Write your PostgreSQL query statement below

SELECT p1.product_id,
    COALESCE(
        (
            SELECT p2.new_price
            FROM Products p2
            WHERE p1.product_id = p2.product_id
            AND p2.change_date <= DATE '2019-08-16'
            ORDER BY p2.change_date DESC
            LIMIT 1
        ), 10
    ) AS price
FROM (
    SELECT DISTINCT product_id
    FROM Products
) AS p1;

-- COALESCE() means:

-- If the first value is NULL, use the second value.

-- Examples:

-- COALESCE(35, 10)
-- → 35

-- because 35 isn't NULL.