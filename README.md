# Chit-Chat

[![Generic badge](https://img.shields.io/badge/Author-Yndiliädrin-<COLOR>.svg)](https://shields.io/) [![GitHub stars](https://img.shields.io/github/stars/Yndiliadrin/Chat.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/Yndiliadrin/Chat/stargazers/)

<!-- (Itt fentebb majd a 'Chat'-et ki kell cserélni 'Chit-Chatre') -->

## Description
This is a basic chat application for learning purposes **only**! During the development I use NodeJS + AngularJS + MySQL.

---

## Specificaiton
* A user can:
  * regist
  * login
  * read rooms
  * read messages between him and other user
  * send messages to rooms
  * send messages to users
  * cry

---


## Diagrams

### Entity-Relation
<details><summary>Diagram</summary>
<p algin="center">
<img src="./.documentation/CC_EK.svg" alt="Entity-Relation Diagram v0.0.1" />
</p>
</details>

#### User Entity
Name          | Type          | Comment
------------- | ------------- | -------------
ID            | VARCHAR(36)   | Generated via MySQLs UUID() function<br /><b>PRIMARY KEY</b>, <b>NOT NULL</b>
username      | VARCHAR(32)   | Alias choosen by the user at registration<br /><b>UNIQUE</b>, <b>NOT NULL</b>
password      | VARCHAR(255)  | Users password to login, stored in hash<br /><b>NOT NULL</b>
email         | VARCHAR(128)  | Users email, used to login<br /><b>NOT NULL</b>
is_admin      | BOOLEAN       | Determine whether or not the given user is possess admin rights on the server<br /><b>NOT NULL</b>

#### Message Entity
Name          | Type          | Comment
------------- | ------------- | -------------
ID            | VARCHAR(36)   | Generated via MySQLs UUID() function<br /><b>PRIMARY KEY</b>, <b>NOT NULL</b>
sender        | VARCHAR(32)   | The messages senders ID<br /><b>FOREIGN KEY</b>, <b>NOT NULL</b>
receiver      | VARCHAR(255)  | The messages consignees ID<br /><b>FOREIGN KEY</b>, <b>NOT NULL</b>
type          | VARCHAR(128)  | Determine the message type, it can be image or text<br /><b>NOT NULL</b>
content       | TEXT          | The message content, if its just text than its probably plain<br />(Can be encrypted in the future), in the case of image than its BLOB or something<br /><b>NOT NULL</b>
time          | TIMESTAMP     | The timestamp of the sending<br /><b>NOT NULL</b>

### Classes
<details><summary>Diagram</summary>
<p>
itt lesz majd egy kép, asszem
</p>
</details>