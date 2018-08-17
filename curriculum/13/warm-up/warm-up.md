```
<!-- index.ejs -->

<html>
  <header>
    <title>Code Challenge!</title>
  </header>
  <body>
    <ul>
    <% data.forEach(() => {
      <%><h1>user.username</h1><%>
      <%><p>user.password</p><%>
    }) %>
  </ul>
</html>
```
