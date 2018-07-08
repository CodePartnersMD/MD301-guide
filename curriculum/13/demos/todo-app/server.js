'use strict'

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
// client.on('error', err => console.error(err));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/tasks', getTasks);

app.get('/tasks/:id', getOneTask);

app.get('/add', showForm);

app.post('/add', addTask);

app.get('*', (req, res) => res.status(404).send('This route does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

function getTasks(request, response) {
  let SQL = 'SELECT * from tasks;';

  return client.query(SQL)
    .then(results => response.render('index', {results: results.rows}))
    .catch(console.error)
    // .catch(err => response.render('pages/error-view', {error: err}));
}

function getOneTask(request, response) {
  let SQL = 'SELECT * FROM tasks WHERE id=$1;';
  let values = [request.params.id];

  return client.query(SQL, values)
    .then(result => response.render('pages/detail-view', {task: result.rows[0]}))
    .catch(console.error)
    // .catch(err => response.render('pages/error-view', {error: err}));
}

function showForm(request, response) {
  response.render('pages/add-view');
}

function addTask(request, response) {
  let {title, description, category, contact, status} = request.body;

  let SQL = 'INSERT INTO tasks(title, description, category, contact, status) VALUES ($1, $2, $3, $4, $5);';
  let values = [title, description, category, contact, status];

  return client.query(SQL, values)
    .then(response.redirect('/tasks'))
    .catch(console.error)
    // .catch(err => response.render('pages/error-view', {error: err}));
}

// function onError(request, response) {
//   response.render('pages/error-view', {error: err})
// }
