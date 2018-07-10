'use strict'

// Application Dependencies
const express = require('express');
const pg = require('pg');

// Application Setup
const app = express();
const PORT = process.env.PORT;

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();

// TODO: error handler elsewhere (with other functions below)
client.on('error', err => console.error(err));

// Application Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Serve static files
app.use(express.static('public'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// API Routes
app.get('/api/v1/books', getBooks);

app.get('/api/v1/books/:id', getOneBook);

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));


// HELPER FUNCTIONS

function getBooks(request, response) {
  let SQL = 'SELECT id, title, author, image_url, isbn FROM books;';

  return client.query(SQL)
    .then(results => response.render('index', {books: results.rows}))
    .catch(handleError);
}

function getOneBook(request, response) {
  let SQL = 'SELECT * FROM books WHERE id=$1;';
  let values = [request.params.id];

  return client.query(SQL, values)
    .then(result => response.render('pages/detail-view', {book: result.rows[0]}))
    .catch(handleError);
}

function handleError(error, response) {
  response.render('pages/error-view', {error: error});
}
