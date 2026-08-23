-- Write your PostgreSQL query statement below
UPDATE Salary
SET sex = CASE
   WHEN sex = 'm' THEN 'f'
   ELSE 'm'
END;   


# shortcut
UPDATE table_name
SET column_name = CASE
    WHEN condition THEN new_value
    ELSE other_value
END;