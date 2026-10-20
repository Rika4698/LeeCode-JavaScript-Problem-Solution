-- Write your PostgreSQL query statement below
SELECT e.employee_id
FROM Employees e
LEFT JOIN Employees AS m
ON e.manager_id = m.employee_id
WHERE e.salary < 30000 
AND e.manager_id IS NOT NULL
AND m.employee_id IS NULL
ORDER BY e.employee_id;


-- AND e.manager_id IS NOT NULL

-- এখন যাদের manager ID-ই নেই, তাদের বাদ দিচ্ছি।

-- কারণ manager না থাকলে তিনি company ছেড়েছেন—এমন সিদ্ধান্ত নেওয়া যায় না। এখানে আমাদের manager ID থাকতে হবে, কিন্তু manager-এর record থাকতে পারবে না।

-- AND m.employee_id IS NULL


-- এটাই problem-এর সবচেয়ে গুরুত্বপূর্ণ অংশ।

-- Manager-এর record পাওয়া গেলে m.employee_id-তে ID থাকবে। Manager-এর record না থাকলে এটি NULL হবে।