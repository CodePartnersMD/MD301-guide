![CF](https://i.imgur.com/7v5ASc8.png)

TODO: add title of lab 12, above

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

TODO: Add updated wireframes

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
│  │   ├── error.ejs
│  │   └── show.ejs
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

#### Overview

This lab assignment will add the ability for a user to see the details of a single book in a new view. Your code base will also become more modularized, making your code DRY.

*1. As a user, I want to request information about a single book so that I can view additional details.*

- Add an endpoint for a `GET` request to `/books/:id`.
  - This should allow the client to make a request for a singular book, which returns the details of that record from the DB. 
- You will likely need to modify the template in your `index.ejs` file to allow the user to select a single book and use its unique id to display the details.
- Create a new view called `show.ejs` to display the detail view of a single book.
- Include the ability for the user to return to the main list of all books.
- Redeploy your application.

*2. As a user, I want to use callbacks in my `server.js` file so that my code is easier to read.*
- Move your SQL queries and view rendering into callbacks. Reference the appropriate callback in each route.
- Move your error handling into a callback.

*3. As a user, I want to modularize my code so that it becomes DRY and easier to maintain.*
- Add a new folder called `partials` and create files that are the same across each view. Include the partial files into each view.
- Redeploy your application.

*4. As a user, I want a simple, clean looking UI so that my application is easy to navigate.*

- Continue to style your site using a *mobile-only* approach. Use the provided wireframes as a general guideline for the _minimum styling requirements_, while adding your own personal taste and color palette.
- Ensure the proper use of SMACCS principles.
  - Your `modules.css` will probably become larger today, which means that you should exercise SMACSS further by modularizing that stylesheet into a `modules/` directory with a file for each partial component of your site.
- Continue to iterate on your styles. For example, begin to include standardized styles such as a color palette and defined font families.
- Redeploy your application.

## Stretch Goal

*As a developer, I want to automatically populate the database so my application is functioning efficiently.*

- Implement a NodeJS script that will read a JSON file and populate your PostgreSQL database with that content.
  - You will need to utilize the `fs` (file system) module from Node.


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
