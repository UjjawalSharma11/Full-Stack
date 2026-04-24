CREATE DATABASE college;
USE college;

CREATE TABLE student(
	rollno INT UNIQUE,
    name VARCHAR(30) NOT NULL,
    age INT,
    CONSTRAINT CHECK (age > 20),
    PRIMARY KEY (rollno)
);

CREATE TABLE teacher(
	uid INT,
    name VARCHAR(30) NOT NULL,
    subject VARCHAR(30) NOT NULL,
    sid INT,
    FOREIGN KEY (sid) REFERENCES student (rollno)
);

INSERT INTO student
(rollno, name, age)
VALUES
(11, "US", 22),
(12, "AM", 27),
(13, "AU", 30);

SELECT * FROM student1;
SELECT rollno, name from student;
DROP TABLE teacher1;

