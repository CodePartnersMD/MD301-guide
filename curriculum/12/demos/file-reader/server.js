'use strict';

const express = require('express');
const pg = require('pg');
const fs = require('fs');

const app = express();

const PORT = 3000;

const constring = 'postgres://localhost:5432/file_loader';
const client = new pg.Client(constring);
client.connect();
client.on('error', err => console.error(err));

app.use(express.static('public'));

loadDB();

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// HELPER FUNCTIONS
// Create the table if it does not exist in the database
function loadDB() {
  let SQL = `
  CREATE TABLE IF NOT EXISTS articles (
    article_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    author_url VARCHAR (255),
    category VARCHAR(20),
    published_on DATE,
    body TEXT NOT NULL);`
  client.query( SQL )
    .then( () => loadArticles() )
    .catch( err => console.error(err) );
}

// Load the items into the table
function loadArticles() {
  let SQL = 'SELECT count(*) FROM articles';
  client.query( SQL )
    .then( result => {
      if( !parseInt( result.rows[0].count )) {
        fs.readFile('./public/data/data.json', 'utf8', (err, data) => {
          JSON.parse( data ).forEach( element => {
            let SQL = `INSERT INTO articles(title, author, author_url, category, published_on, body) VALUES ($1, $2, $3, $4, $5, $6);`;

            let values = [element.title, element.author, element.author_url, element.category, element.published_on, element.body];

            client.query( SQL, values );
          })
        })
      }
    })
}
