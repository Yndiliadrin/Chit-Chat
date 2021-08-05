DROP TABLE IF EXISTS ccdb.Message;
DROP TABLE IF EXISTS ccdb.User;
DROP TABLE IF EXISTS ccdb.Room;
DROP DATABASE IF EXISTS ccdb;


-- Create admin user for the applications database
DROP USER IF EXISTS 'ccadmin'@'localhost';
CREATE USER 'ccadmin'@'localhost' IDENTIFIED BY 'password';
CREATE DATABASE ccdb;
-- The privileges can use some fine tuneing

CREATE TABLE ccdb.User (
    id          VARCHAR(36)     NOT NULL,
    username    VARCHAR(32),
    pass        VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id),
    UNIQUE      (username)
);

CREATE TABLE ccdb.Message (
    id          VARCHAR(36)     NOT NULL,
    sender      VARCHAR(36)     NOT NULL,
    receiver    VARCHAR(36)     NOT NULL,
    type        VARCHAR(5)      NOT NULL,
    content     TEXT            NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (sender)        REFERENCES User(id),
    FOREIGN KEY (receiver)      REFERENCES User(id)
);

CREATE Table ccdb.Room (
    id          VARCHAR(36)     NOT NULL,
    PRIMARY KEY (id)
);


-- Cannot add privileges to by my user
-- GRANT ALL PRIVILEGES ON ccdb.* TO 'ccadmin'@'localhost';
--FLUSH PRIVILEGES;
