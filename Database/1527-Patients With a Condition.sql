-- Write your PostgreSQL query statement below
SELECT p.patient_id, p.patient_name, p.conditions
FROM Patients p
WHERE conditions LIKE 'DIAB1%' OR conditions LIKE '% DIAB1%';