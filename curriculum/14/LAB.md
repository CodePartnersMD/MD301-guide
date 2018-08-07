![CF](https://i.imgur.com/7v5ASc8.png)

TODO: add title of lab 14, above

## Submission Instructions

- Continue working in the same repository from the previous class.
- Continue to work on semantically-named non-master branches.
- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment

## Resources

TODO: add updated wireframes

- [Google Books API Documentation](https://developers.google.com/books/docs/v1/getting_started)
- [Superagent](https://visionmedia.github.io/superagent/)


## Configuration

- `ENV VARS` - Paste the following commands into your terminal window for testing locally.
  * _Note: these will be temporary while the current shell session (window) is open._


```
export PORT=3000
Mac:     export DATABASE_URL=postgres://localhost:5432/books_app
Windows: export DATABASE_URL=postgres://USER:PASSWORD@localhost:5432/books_app
```

Use the following as a guide for your directory structure.

```sh
book_app (repository)
├──public
│  └── styles
│      ├── base.css
│      ├── fonts
│      │   ├── icomoon.eot
│      │   ├── icomoon.svg
│      │   ├── icomoon.ttf
│      │   └── icomoon.woff
│      ├── icons.css
│      ├── layout.css
│      ├── modules.css
│      └── reset.css
├──views
│  ├── pages
│  │   ├── books
│  │   │   ├── new.ejs
│  │   │   └── show.ejs
│  │   ├── searches
│  │   │   ├── new.ejs
│  │   │   └── show.ejs
│  │   └── error.ejs
│  ├── partials
│  │   ├── footer.ejs
│  │   ├── head.ejs
│  │   └── header.ejs
│  └── index.ejs
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## User Stories and Feature Tasks

Today's refactor will implement the use of a third-party API, Google Books, which will give users the ability to search by author or title. If the user finds the book they want they will be able to add that book to the database.

*1. As a user, I want to use the Google Books API so that I can search for books and add new books to my list.*

- Install and require the `superagent` package from NPM; validate that it's listed as a dependency in your `package.json`.
- Create a view called `new.ejs` which contains a search field. Add the ability for a user to indicate if they are searching by title or author.
  - Now that we are using two models, books and searches, the `pages` folder can be further organized. See the file structure above for suggestions.
- Add an endpoint to display the form to the user, such as `/searches/new`.
- Add an endpoint for a `GET` request to `/searches` which will proxy a `superagent` request from the client to the Google Books API and return a list of ten books that match the search query.
  - Map over the array of results to build an array of objects that match the `book` model in your database. Include logic to display default data in the case that the API does not return data for every property requested.
  - Render the newly constructed array of objects in a new view, such as `searches/show.ejs`.

*2. As a user, I want to be able to select one book from the search results so that I can add it to the database.*
- In the results view, include a hidden form that will be populated with the details of each book from the API response. Provide the ability for a user to click a button and add a single book to the database, using the details from the hidden form. Consider user experience when building out this functionality.
- Where possible, reuse callbacks you created in earlier book app labs to add a single book to the database. If successful, provide feedback to the user that the book was added to the database.
- Redeploy your application.

## Documentation

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```
