```
<!-- index.html -->

<html>
  <head>
    <title>Click tracker
  </head>
  <body>
    <div id="click">
      <p>Click me</p>
    </div>
  </body>
</html>


<!-- app.js -->

$(.click).on('change', 'div', function() => {
  var counter = '0';
  $(p).on('click', counter++);
})
```
