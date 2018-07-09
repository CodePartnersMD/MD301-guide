'use strict'

// Application dependencies
const express = require('express');
const cors = require('cors');
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
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// Serve static files
app.use(express.static('public'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

app.get('/api/v1/books', getBooks);

app.get('/api/v1/books/find', searchForBook);

app.get('/api/v1/books/add', showForm);

app.get('/api/v1/books/:id', getOneBook);

app.post('/api/v1/books/add', addBook);

app.put('/api/v1/books/:id', (request, response) => {
  updateBook(request.body, request.params.id)
    .then(() => response.sendStatus(204))
    .catch(console.error)
});

app.delete('/api/v1/books/:id', (request, response) => {
  deleteBook(request.params.id)
    .then(() => response.sendStatus(204))
    .catch(console.error);
});

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

function getBooks(request, response) {
  let SQL = 'SELECT * FROM books;';

  return client.query(SQL)
    .then(results => response.render('index', {books: results.rows}))
    .catch(error => response.render('pages/error-view', {error: error}));
}

function getOneBook(request, response) {
  let SQL = 'SELECT * FROM books WHERE id=$1;';
  let values = [request.params.id];

  return client.query(SQL, values)
    .then(result => response.render('pages/detail-view', {book: result.rows[0]}))
    .catch(error => response.render('pages/error-view', {error: error}));
}

function showForm(request, response) {
  response.render('pages/add-view');
}

function addBook(request, response) {
  let {title, author, isbn, image_url, description} = request.body;
  let SQL = 'INSERT INTO books(title, author, isbn, image_url, description) VALUES($1, $2, $3, $4, $5);';
  let values = [title, author, isbn, image_url, description];

  return client.query(SQL, values)
    .then(response.redirect('/api/v1/books'))
    .catch(error => response.render('pages/error-view', {error: error}));
}

// TODO: rename "book" parameter
function updateBook(book, bookId) {
  let {title, author, isbn, image_url, description} = book;
  let SQL = `UPDATE books SET title=$1, author=$2, isbn=$3, image_url=$4, description=$5 WHERE id=$6`;
  let values = [title, author, isbn, image_url, description, bookId];

  return client.query(SQL, values);
}

function deleteBook(bookId) {
  let SQL = 'DELETE FROM books WHERE id=$1';
  let values = [bookId];

  return client.query(SQL, values);
}

function searchForBook(request, response) {
  let url = 'https://www.googleapis.com/books/v1/volumes';
  let query = 'dune';
  // if(searchQuery.title) query += `+intitle:${searchQuery.title}`;
  // if(searchQuery.author) query += `+inauthor:${searchQuery.author}`;
  // if(searchQuery.isbn) query += `+isbn:${searchQuery.isbn}`;

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
    .then(results => response.render('pages/results-view', {results: results}))
    .catch(error => response.render('pages/error-view', {error: error}));
}
