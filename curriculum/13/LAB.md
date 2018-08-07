![CF](https://i.imgur.com/7v5ASc8.png)

TODO: add title of lab 13, above

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

- [HTML5 Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

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
│  │   ├── new.ejs
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

This lab assignment will add the ability for a user to add a new book to the database by filling in a form.

*1. As a user, I want the ability to add new books to my app so that my collection continues to grow.*

- Create a view called `new.ejs` which contains a form. The user will be able to enter the details of a new book.
- Add an endpoint to display the form to the user.
- Add an endpoint for a `POST` request to `/books`.
  - The callback should add the new book to the database.

*2. As a user, I want to provide feedback so that the user receives confirmation that the new book was successfully added to the database.*

- In the callback to add a new book, add a second query to retrieve the newly-added book from the database and display the details to the user.
- Use the same detail view from lab 12. Display a message to the user to indicate that the book was successfully added to the database.

*3. As a user, I want my application to be clean and free of visual distractions so that I can view my books without other content cluttering the viewport.*

- Include a hamburger menu that will allow the ability to navigate between views. Update your partials as needed.

#### STRETCH GOAL

*As a developer, I want to explore further functionality so that I can continue to improve the user's experience.*

- Implement the ability for your hamburger menu to operate without the use of JavaScript. You will need to research how to enable a 'pop-up/out' style menu with vanilla HTML and CSS.
- Consider any further UI/UX features which will allow a more friendly interface for your users.

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
