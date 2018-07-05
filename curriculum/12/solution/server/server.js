'use strict'

// Application dependencies
const express = require('express');
const cors = require('cors');
const pg = require('pg');

// Application Setup
const app = express();
const PORT = process.env.PORT;

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// Application Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// API Endpoints
app.get('/api/v1/books', (request, response) => {
  fetchAllBooks()
    .then(results => response.send(results.rows))
    .catch(console.error);
});

app.get('/api/v1/books/:id', (request, response) => {
  fetchOneBook(request)
    .then(results => response.send(results.rows))
    .catch(console.error);
});

app.get('*', (request, response) => response.status(403).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

function fetchAllBooks() {
  let SQL = 'SELECT book_id, title, author, image_url, isbn FROM books;';
  
  return client.query(SQL);
}

function fetchOneBook(req) {
  let SQL = 'SELECT * FROM books WHERE book_id=$1;';
  let values = [req.params.id];
  
  return client.query(SQL, values);
}
