-- Write your PostgreSQL query statement below
SELECT employee_id, 
  CASE 
    WHEN employee_id % 2 = 1 AND name NOT LIKE 'M%'
    THEN salary
    ELSE 0
  END AS bonus
FROM  Employees
ORDER BY employee_id; 


-- name NOT LIKE 'M%'
-- এখানে LIKE দিয়ে text pattern match করা হয়।
-- name LIKE 'M%'


-- এর মানে name-এর শুরুতে M থাকবে।
-- % মানে এরপর যেকোনো সংখ্যক character থাকতে পারে।