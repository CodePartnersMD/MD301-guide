const express = require(express);

app.get('username', req, res => {
  const userInfo = {};

  userInfo.name: request.username,
  userInfo.password: request.password

  response.sendFile('index.html', 'style.css')
})


app.listen(() => "Listening on Port 3000");


// Problems with this code:
// 'use strict'; is missing
// app is not declared, express is not instantiated
// userInfo is a const
// properties are added to userInfo as an object literal
// callback is missing parens around (req, res)
// code refers to request and response, but parameters are req and res
// improper syntax for app.listen
// double quotes in app.listen
// response.sendFile only takes in one file at a time
// semicolon missing after response.sendFile
// forward slash is missing in the path
