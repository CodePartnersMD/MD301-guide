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

// API Endpoints
app.get('/api/v1/books', (request, response) => {
  fetchAllBooks()
    .then(results => response.send(results.rows))
    .catch(console.error);
});

app.get('/api/v1/books/:id', (request, response) => {
  fetchOneBook(request.params.id)
    .then(results => response.send(results.rows))
    .catch(console.error);
});

app.get('/api/v1/books/find', (request, response) => {
  searchForBook('dune')
    .then(arr => response.send(arr))
    .catch(console.error)
});

app.post('/api/v1/books', (request, response) => {
  addBook(request.body)
    .then(response.sendStatus(201))
    .catch(console.error);
});

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

app.get('*', (request, response) => response.status(403).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

function fetchAllBooks() {
  let SQL = 'SELECT book_id, title, author, image_url, isbn FROM books;';

  return client.query(SQL);
}

function fetchOneBook(bookId) {
  let SQL = 'SELECT * FROM books WHERE book_id=$1;';
  let values = [bookId];

  return client.query(SQL, values);
}

function addBook(newBook) {
  let {title, author, isbn, image_url, description} = newBook;
  let SQL = 'INSERT INTO books(title, author, isbn, image_url, description) VALUES($1, $2, $3, $4, $5);';
  let values = [title, author, isbn, image_url, description];
  
  return client.query(SQL, values);
}

// TODO: rename "book" parameter
function updateBook(book, bookId) {
  let {title, author, isbn, image_url, description} = book;
  let SQL = `UPDATE books SET title=$1, author=$2, isbn=$3, image_url=$4, description=$5 WHERE book_id=$6`;
  let values = [title, author, isbn, image_url, description, bookId];

  return client.query(SQL, values);
}

function deleteBook(bookId) {
  let SQL = 'DELETE FROM books WHERE book_id=$1';
  let values = [bookId];

  return client.query(SQL, values);
}

function searchForBook(searchQuery) {
  let url = 'https://www.googleapis.com/books/v1/volumes';
  let query = '';
  if(searchQuery.title) query += `+intitle:${searchQuery.title}`;
  if(searchQuery.author) query += `+inauthor:${searchQuery.author}`;
  if(searchQuery.isbn) query += `+isbn:${searchQuery.isbn}`;

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
        book_id: industryIdentifiers ? `${industryIdentifiers[0].identifier}` : '',
      };

    }))
}
