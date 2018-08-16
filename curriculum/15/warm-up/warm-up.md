```
<!DOCTYPE html>
<html lang="en">
  <head>
    <%= ../../partials/head %>
    <link rel="stylesheet" src="new.css">
  </head>
  <body>
    <%= ../../partials/header %>
    <main method="number" action="/post">
      <h2 classes="search phoneNumber">Search for a phone number</h2>
      <form>
        <input type="name" name="search">
        <label for="name" placeholder="Name">Name</label>
        <input type="area-code" id="title" name="title">
        <label for="area-code">Area Code</label>
        <input type="number" id="number" name="number">
        <button type="submit">Search for a phone number</button>
      </form>
    </main>
    <%= ../../partial/footer %>
  </body>
</html>
```
