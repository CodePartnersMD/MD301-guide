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

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/tasks', (request, response) => {
  fetchAllTasks()
    .then(results => response.render('index', {results: results.rows}))
    .catch(error => response.render('pages/error-view', {error: error}));
});

app.get('/tasks/:task_id', (request, response) => {
  fetchOneTask(request.params.task_id)
    .then(result => response.render('pages/detail-view', {task: result.rows[0]}))
    .catch(error => response.render('pages/error-view', {error: error}));
});

app.get('*', (req, res) => res.status(403).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

function fetchAllTasks() {
  let SQL = 'SELECT * from tasks;';

  return client.query(SQL);
}

function fetchOneTask(taskId) {
  let SQL = 'SELECT * FROM tasks WHERE id=$1;';
  let values = [taskId];

  return client.query(SQL, values);
}
