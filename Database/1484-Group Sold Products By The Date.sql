-- Write your PostgreSQL query statement below
SELECT sell_date, COUNT(DISTINCT product) AS num_sold,
    STRING_AGG(
        DISTINCT product,
        ',' ORDER BY product
    ) AS products
FROM Activities
GROUP BY sell_date
ORDER BY sell_date;    

-- STRING_AGG(product, ',')

-- turns:

-- A
-- B
-- C

-- into:

-- A,B,C

-- Think:

-- STRING_AGG = Combine multiple strings into one string.


-- Inside STRING_AGG
-- ORDER BY product

-- means:

-- Sort product names alphabetically.

-- Example:

-- Basketball,Headphone,T-shirt
-- At the end
-- ORDER BY sell_date

-- means:

-- Sort the final rows by date.

-- So:

-- 2020-05-30
-- 2020-06-01
-- 2020-06-02