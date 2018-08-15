'use strict'
let express = app();

app.use(express.static('public'));

app.get('/user-list', (request, response) {
  response.renderFile('index.html', [users: data])
})
