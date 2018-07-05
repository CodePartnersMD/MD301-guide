'use strict'

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(cors());

app.set('view engine', 'ejs');

// Note: this is our proof of life for deployment.
// app.get('/', (request, response) => response.send('Testing 1, 2, 3'));

app.get('/tasks', (request, response) => {
  fetchAllTasks()
    .then(result => response.render('index', {results: result.rows}))
    .catch(console.error);
});

app.get('*', (request, response) => response.status(403).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

function fetchAllTasks() {
  let SQL = 'SELECT * from tasks;';

  return client.query(SQL);
}

// PORT=3000

// Mac:
// DATABASE_URL=postgres://localhost:5432/task_app

// Windows:
// DATABASE_URL=postgres://USER:PASSWORD@localhost:5432/task_app
