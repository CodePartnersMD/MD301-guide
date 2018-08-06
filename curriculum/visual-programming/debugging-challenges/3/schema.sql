DROP TABLE IF NOT EXISTS users

CREATE TABLE users() {
  id SERIAL KEY;
  username VARCHAR;
  password VARCHAR;
  age NUM;
}

-- Problems with this code:
-- No primary key
-- table is dropped if it doesn't exist, command is invalid and missing semicolon
-- create table syntax is incorrect, should not look like a function signature
-- no semis separating properties, should be commas
