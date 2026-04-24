-- We created an instagram database.
CREATE DATABASE instagram;
USE instagram;

-- In this db, we have created two tables user and post.
-- Note that how each column name is being created using col_name, data_type and certain constraints.
CREATE TABLE user(
	id INT,
    name VARCHAR(30),
    followers INT,
    following INT,
    PRIMARY KEY (id)
);

CREATE TABLE post(
	id INT,
    uid INT,
    content VARCHAR(100),
    PRIMARY KEY (id),
    FOREIGN KEY (uid) REFERENCES user (id)
);

-- Once tables are created, now we can insert some data into them.
-- We can also define how we are placing our columns.
INSERT INTO user
(id, name, followers, following)
values
(1, "US", 200, 1),
(2, "AM", 300, 1);

INSERT INTO user
(id, name, followers, following)
values
(3, "XY", 100, 10),
(4, "PQ", 500, 15),
(5, "AB", 50, 150);

INSERT INTO post
(id, uid, content)
values
(101, 2, "Hello World!"),
(102, 1, "Namastey Duniya!");

-- Now we are all set to run certain queries in a way that we can observe only specific data according to our needs.
SELECT name, id
FROM user
WHERE followers >= 100 AND following <= 10; 
-- WHERE clause can be helpful in selecting specifc tuples where defined conditions are met.
-- There are various types of operators available to run with WHERE clause.

SELECT name 
from user 
WHERE name IN ("AM", "US", "XX", "YY");

-- ORDER BY clause is used for arranging our data in some order.
SELECT name, id, followers
FROM user 
ORDER BY followers DESC;

-- MAX, MIN, COUNT are some of the most widely used Aggregate Functions.
SELECT MAX(followers)
FROM user;

SELECT COUNT(following)
FROM user
WHERE following = 1;

-- GROUP BY clause can be used for grouping all the tuples having same values at certain column_name.
SELECT following, count(following)
FROM user
GROUP BY following;

-- HAVING clause just works like WHERE, but on groups.
-- That means HAVING can be used only after we use GROUP BY.
-- Note that whenever we want to apply HAVING clause after GROUP BY then it should be on the coulmn on which GROUP BY took place
-- or we're applying the aggregate function.
SELECT following, COUNT(following), MAX(followers)
FROM user
GROUP BY following
HAVING MAX(followers) > 100;

-- UPDATE command can be used for updating tuple data.
-- NOTE that UPDATE command will just update the data, for printing it we need to use SELECT.
UPDATE user
SET followers = 1000
WHERE following = 1;

-- ALTER TABLE command is used for changing the schema of the table, that means now we're going to change name/add/delete the columns.
ALTER TABLE user
ADD city VARCHAR(30) DEFAULT "Jaipur";

ALTER TABLE user
DROP COLUMN city;

-- TRUNCATE command is used for deleting the entire table's data. Not that like DROP TABLE command we're not deleting the entire table schema here.
-- Note that if some table 1's primary key is used as a foreign key in another table 2, then we can't directly truncate table 1.


SET SQL_SAFE_UPDATES = 0;
SELECT * FROM user;
-- DROP command is used for deleting a table or a db.
DROP TABLE user;
DROP DATABASE instagram;