'use strict';

const express = require('express');

const app = app();

app.post(('/') => (request, response) {
  let SQL = 'Insert into users values $0, $1, $2';

  let values = {id, request.username, request.password};
  
  client.query(SQL)
    .then({
      response.send(result.rowsCount);
    })
})

app.listen(PORT, () {
  console.log('Listening on ${PORT}')}
);

// Problems with this code:
// improper syntax for callback in app.listen
// missing backticks in console.log message
// PORT is not declared
// express is not propertly instantiated as 'app'
// improper formatting in app.post callback and arrow function
// pg is not required in
// client is not instantiated and connected
// no database URL is included
// values should be an array
// values are not sent as part of the query
// values should start at $1
// id is not part of the request.body
// username and password should be properties on the request.body, not the request
// result is not a parameter of the .then
// it should be result.rowCount, not .rowsCount
// SQL query is missing semicolon (although Postgres uses ASI)

// Students may think that the SQL query is invalid, although Postgres does not care about capitailzation in SQL queries
