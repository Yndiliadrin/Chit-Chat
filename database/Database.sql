DROP TABLE IF EXISTS ccdb.Message;

DROP TABLE IF EXISTS ccdb.User;

DROP TABLE IF EXISTS ccdb.Room;

DROP DATABASE IF EXISTS ccdb;

-- Create admin user for the applications database
DROP USER IF EXISTS 'ccadmin' @'localhost';

CREATE USER 'ccadmin' @'localhost' IDENTIFIED BY 'password';

CREATE DATABASE ccdb;

-- The privileges can use some fine tuneing
CREATE TABLE ccdb.User (
    uuid VARCHAR(36) NOT NULL,
    username VARCHAR(32),
    password VARCHAR(255) NOT NULL,
    email VARCHAR(128) NOT NULL,
    is_admin BOOLEAN NOT NULL,
    PRIMARY KEY (uuid),
    UNIQUE (username, email)
);

--The 'content' field can be a legit TEXT or an URL pointing to the image
CREATE TABLE ccdb.Message (
    uuid VARCHAR(36) NOT NULL,
    sender VARCHAR(36) NOT NULL,
    receiver VARCHAR(36) NOT NULL,
    type VARCHAR(5) NOT NULL,
    content TEXT NOT NULL,
    TIME DATETIME NOT NULL,
    PRIMARY KEY (uuid),
    FOREIGN KEY (sender) REFERENCES User(uuid),
    FOREIGN KEY (receiver) REFERENCES User(uuid)
);

CREATE Table ccdb.Room (
    uuid VARCHAR(36) NOT NULL,
    PRIMARY KEY (uuid)
);

-- Cannot add privileges to by my user
-- GRANT ALL PRIVILEGES ON ccdb.* TO 'ccadmin'@'localhost';
--FLUSH PRIVILEGES;
--INITIAL INSERT
INSERT INTO
    ccdb.User(
        `uuid`,
        `username`,
        `password`,
        `email`,
        `is_admin`
    )
VALUES
    (
        UUID(),
        'adminee',
        '1q2w3e',
        'berberus@freemail.hu',
        TRUE
    )