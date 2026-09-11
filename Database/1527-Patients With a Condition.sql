-- Write your PostgreSQL query statement below
SELECT p.patient_id, p.patient_name, p.conditions
FROM Patients p
WHERE conditions LIKE 'DIAB1%' OR conditions LIKE '% DIAB1%';


-- LIKE is used for pattern matching.

-- name LIKE 'A%'

-- means:

-- Name starts with A.

-- % means:

-- Any number of characters can come after this.
-- First %
-- %

-- means:

-- There can be anything before DIAB1.