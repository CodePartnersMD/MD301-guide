'use strict';

const express = require('express');

const app = express();

// Use this as a talking point about environment variables
const PORT = process.env.PORT || 3000;

// Serve public files, which is styles.css
app.use(express.static('public'));

let groceries = ['apples', 'celery', 'butter', 'milk', 'eggs'];

let quantities = [
  {name: 'apples', quantity: 4},
  {name: 'celery', quantity: 1},
  {name: 'butter', quantity: 1},
  {name: 'milk', quantity: 2},
  {name: 'eggs', quantity: 12}
]

// Routes
app.get('/', (request, response) => {
  response.render('index');
});

app.get('/list', (request, response) => {
  response.render('list', {items: groceries});
})

app.get('/details', (request, response) => {
  response.render('details', {items: quantities});
})

// Set the view engine for templating
app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
