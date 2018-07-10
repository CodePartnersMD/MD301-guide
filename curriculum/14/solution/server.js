'use strict'

// Application Dependencies
const express = require('express');
const pg = require('pg');
const superagent = require('superagent');

// Application Setup
const app = express();
const PORT = process.env.PORT;
const API_KEY = process.env.GOOGLE_API_KEY;

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
app.get('/searches/new', newSearch);
app.get('/books/:id', getBook);
app.post('/books', createBook);
app.post('/searches', createSearch);
app.put('/books/:id', updateBook);
app.delete('/books/:id', deleteBook);

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// HELPER FUNCTIONS
function getBooks(request, response) {
  let SQL = 'SELECT * FROM books;';

  return client.query(SQL)
    .then(results => response.render('index', {books: results.rows}))
    .catch(handleError);
}

function getBook(request, response) {
  let SQL = 'SELECT * FROM books WHERE id=$1;';
  let values = [request.params.id];

  return client.query(SQL, values)
    .then(result => response.render('pages/books/show', {book: result.rows[0]}))
    .catch(handleError);
}

function newBook(request, response) {
  response.render('pages/books/new');
}

function newSearch(request, response) {
  response.render('pages/searches/new');
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
        .then(result => response.render('pages/books/show', {book: result.rows[0]}))
        .catch(handleError);
    })
    .catch(handleError);
}

function createSearch(request, response) {
  let url = 'https://www.googleapis.com/books/v1/volumes';
  let query = '';
  
  let modifiedRequest = request.body.search.split(' ').join('+');
  
  if (request.body.title === 'on') query += `+intitle:${modifiedRequest}`;
  if (request.body.author === 'on') query += `+inauthor:${modifiedRequest}`;

  superagent.get(url)
    .query({'q': query})
    .query({'key': API_KEY})
    .then(apiResponse => apiResponse.body.items.map(bookResult => {
      let { title, authors, industryIdentifiers, imageLinks, description } = bookResult.volumeInfo;
      let placeholderImage = 'http://www.newyorkpaddy.com/images/covers/NoCoverAvailable.jpg';

      return {
        title: title ? title : 'No title available',
        author: authors ? authors[0] : 'No authors available',
        isbn: industryIdentifiers ? `ISBN_13 ${industryIdentifiers[0].identifier}` : 'No ISBN available',
        image_url: imageLinks ? imageLinks.smallThumbnail : placeholderImage,
        description: description ? description : 'No description available',
        id: industryIdentifiers ? `${industryIdentifiers[0].identifier}` : '',
      };
    }))
    .then(results => response.render('pages/searches/show', {results: results}))
    .catch(handleError);
}

function updateBook(request, response) {
  let {title, author, isbn, image_url, description} = request.body;
  let SQL = `UPDATE books SET title=$1, author=$2, isbn=$3, image_url=$4, description=$5 WHERE id=$6`;
  let values = [title, author, isbn, image_url, description, request.params.id];

  return client.query(SQL, values)
    .then(response.render('pages/books/show'))
    .catch(handleError);
}

function deleteBook(request, response) {
  let SQL = 'DELETE FROM books WHERE id=$1';
  let values = [request.params.id];

  return client.query(SQL, values)
    .then(response.render('pages/books/show'))
    .catch(handleError);
}

function handleError(error, response) {
  response.render('pages/error-view', {error: error});
}
