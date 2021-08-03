DROP DATABASE IF EXISTS ccdb;
DROP TABLE IF EXISTS ccdb.User;
DROP TABLE IF EXISTS ccdb.Message;
DROP TABLE IF EXISTS ccdb.Room;
CREATE USER ccadmin IDENTIFIED BY 'password';
CREATE DATABASE ccdb;
CREATE TABLE User (
    id          VARCHAR(36)     NOT NULL,
    username    VARCHAR(32),
    pass        VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id),
    UNIQUE      (username)
);

CREATE TABLE Message (
    id          VARCHAR(36)     NOT NULL,
    sender      VARCHAR(36)     NOT NULL,
    receiver    VARCHAR(36)     NOT NULL,
    type        VARCHAR(5)      NOT NULL,
    content     TEXT            NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (sender)        REFERENCES User(id),
    FOREIGN KEY (receiver)      REFERENCES User(id)
);

CREATE Table Room (
    id          VARCHAR(36)     NOT NULL,
    PRIMARY KEY (id)
);