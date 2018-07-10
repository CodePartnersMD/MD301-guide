'use strict';

// Application Dependencies
const express = require('express');
const pg = require('pg');

// Application Setup
const app = express();
const PORT = process.env.PORT;

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// Application Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// API Routes
app.get('/books', getBooks);
app.get('/books/new', newBook);
app.get('/books/:id', getBook);
app.post('/books', createBook);

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// HELPER FUNCTIONS
function getBooks(request, response) {
  let SQL = 'SELECT * FROM books;';

  return client.query(SQL)
    .then(results => response.render('index', {books: results.rows}))
    .catch(handleError);
}

function newBook(request, response) {
  response.render('pages/books/new');
}

function getBook(request, response) {
  let SQL = 'SELECT * FROM books WHERE id=$1;';
  let values = [request.params.id];

  return client.query(SQL, values)
    .then(result => response.render('pages/books/show', {book: result.rows[0], message: ''}))
    .catch(handleError);
}

function createBook(request, response) {
  let {title, author, isbn, image_url, description} = request.body;
  let SQL = 'INSERT INTO books(title, author, isbn, image_url, description) VALUES($1, $2, $3, $4, $5);';
  let values = [title, author, isbn, image_url, description];

  return client.query(SQL, values)
    .then(() => {
      SQL = 'SELECT * FROM books WHERE isbn=$1;';
      values = [request.body.isbn];
      return client.query(SQL, values)
        .then(result => response.render('pages/books/show', {book: result.rows[0], message: 'This book has been added to your database!'}))
        .catch(handleError);
    })
    .catch(handleError);
}

function handleError(error, response) {
  response.render('pages/error-view', {error: error});
}
