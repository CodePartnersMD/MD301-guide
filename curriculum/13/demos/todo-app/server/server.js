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

app.get('/tasks', (request, response) => {
  fetchAllTasks()
    .then(results => response.send(results.rows))
    .catch(console.error);
});

app.get('/tasks/:id', (request, response) => {
  fetchOneTask(request.params.id)
    .then(results => response.send(results.rows))
    .catch(console.error);
});

app.post('/tasks/add', express.urlencoded(), (request, response) => {
  addNewTask(request.body)
    .then(response.sendStatus(201))
    .catch(console.error);
});

app.get('*', (request, response) => response.status(403).send('This route does not exist'));

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

function addNewTask(newTask) {
  let {title, description, category, contact, status} = newTask;

  let SQL = 'INSERT INTO tasks(title, description, category, contact, status) VALUES ($1, $2, $3, $4, $5);';
  let values = [title, description, category, contact, status];

  return client.query(SQL, values);
}
