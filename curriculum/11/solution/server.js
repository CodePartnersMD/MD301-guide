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

// Serve static files
app.use(express.static('public'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// API Endpoints
app.get('/api/v1/books', getBooks);

app.get('*', (request, response) => response.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

function getBooks(request, response) {
  let SQL = 'SELECT id, title, author, image_url, isbn FROM books;';

  return client.query(SQL)
    .then(results => response.render('index', {books: results.rows}))
    .catch(error => response.render('pages/error-view', {error: error}));
}
