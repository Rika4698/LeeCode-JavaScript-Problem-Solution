-- Write your PostgreSQL query statement below
SELECT user_id, CONCAT(
    UPPER(LEFT(name, 1)),
    LOWER(SUBSTRING(name FROM 2))
) AS name
FROM Users
ORDER BY user_id;

-- LEFT() takes characters from the left side of a string.

-- Syntax: LEFT(string, number_of_characters)

-- Example: LEFT('aLice', 1)

-- Result: a

-- UPPER() It converts text to uppercase.

-- Example: UPPER('a')

-- Result: A


-- SUBSTRING() It extracts part of a string.

-- Syntax in PostgreSQL: SUBSTRING(string FROM starting_position)

-- For example: SUBSTRING('aLice' FROM 2)

-- Result: Lice

-- LOWER() It converts text to lowercase.

-- Example: LOWER('Lice')

-- Result: lice

-- CONCAT() combines multiple strings.

-- Example: CONCAT('A', 'lice')

-- Result: Alice