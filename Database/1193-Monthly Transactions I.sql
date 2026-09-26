-- Write your PostgreSQL query statement below
SELECT TO_CHAR(trans_date, 'YYYY-MM') AS month,
  country, COUNT(*) AS trans_count, 
    COUNT(
        CASE 
        WHEN state = 'approved' THEN 1
        END
    ) AS approved_count, SUM(amount) AS trans_total_amount,
    SUM(
        CASE
        WHEN state = 'approved' THEN amount
        ELSE 0
        END
    ) AS approved_total_amount

    FROM Transactions
    GROUP BY TO_CHAR(trans_date, 'YYYY-MM'), country;


-- TO_CHAR() converts a date into a formatted text value.

-- Basic idea:

-- TO_CHAR(date, format)

-- For example:

-- TO_CHAR(DATE '2019-01-07', 'YYYY-MM')

-- returns:

-- 2019-01

-- COUNT(*) counts every row.  
-- COUNT(expression) counts non-NULL values.

-- CASE
--     WHEN condition THEN result
--     ELSE result
-- END