'use strict'
let express = app();

app.use(express.static('public'));

app.get('/user-list', (request, response) {
  response.renderFile('index.html', [users: data])
})

// Problems with this code:
// express is not required and instantiated correctly, should also be const instead of let
// app.listen is missing
// there are no public files to serve
// view engine is not set
// arrow missing in arrow function
// response.renderFile should be response.render
// rendered file is index.ejs, not index.html
// data should be an object, not an array
