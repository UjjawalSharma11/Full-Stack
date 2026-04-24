-- Question 1
CREATE DATABASE school;
USE school;

CREATE TABLE teacher(
	id INT,
    name VARCHAR(30),
    subject VARCHAR(30),
    salary int,
    PRIMARY KEY (id)
);

INSERT INTO teacher
(id, name, subject, salary)
values
(23, "Ajay", "Math", 50000),
(47, "Bharat", "English", 60000),
(18, "Chetan", "Chemistry", 45000),
(9, "Divya", "Physics", 75000);

SELECT name, salary
FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT "Jaipur";

ALTER TABLE teacher
DROP COLUMN ctc;

SELECT * FROM teacher;


-- Question 2
CREATE TABLE student(
	rollno INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    city VARCHAR(30),
    marks INT
);

INSERT INTO student
(rollno, name, city, marks)
values
(110, "Adam", "Delhi", 76),
(108, "Bob", "Mumbai", 65),
(124, "Casey", "Pune", 94),
(112, "Duke", "Pune", 80);

SELECT name, marks
FROM student
WHERE marks > 75;

SELECT city
FROM student
GROUP BY city;

SELECT city, MAX(marks)
FROM student
GROUP BY city;

SELECT AVG(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(1);

UPDATE student
SET grade = "O"
WHERE marks >= 80;

UPDATE student
SET grade = "A"
WHERE marks < 80 AND marks >= 70;

UPDATE student
SET grade = "B"
WHERE marks < 70;

SELECT * FROM student;
SET SQL_SAFE_UPDATES = 0;
