







app.post('/tasks/add', express.urlencoded(), (request, response) => {
  addNewTask(request.body)
    .then(response.sendStatus(201))
    .catch(console.error);
});



function addNewTask(newTask) {
  let {title, description, category, contact, status} = newTask;

  let SQL = 'INSERT INTO tasks(title, description, category, contact, status) VALUES ($1, $2, $3, $4, $5);';
  let values = [title, description, category, contact, status];

  return client.query(SQL, values);
}
