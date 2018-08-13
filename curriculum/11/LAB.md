![CF](https://i.imgur.com/7v5ASc8.png) Lab 11: Server-side templating with EJS

## Submission Instructions

- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment

## Resources

- [EJS for server-side templating](http://ejs.co/)
- [ExpressJS docs - app.set](https://expressjs.com/en/4x/api.html#app.set)
- [Heroku Postgres Docs](https://devcenter.heroku.com/articles/heroku-postgresql)

TODO: Add updated wireframes

## Configuration

_Your repository must include the following config files:_

- `.env` - with your PORT and API keys. Make sure this file is included in your `.gitignore`
- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

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
│  │   └── error.ejs
│  └── index.ejs
├── .env
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## User Stories and Feature Tasks

#### Overview

This week, you and your partner(s) will implement a basic full stack application for a book list which will render books from a PostgreSQL database. Today's portion of the application involves storing book objects in a database. The client can make a request to the server for retrieval of all books, which will then be rendered as a list in the browser.

Your entire application will be deployed on Heroku with a PostgreSQL database provisioned. You and your partner(s) can either clone the database to work with locally or you can create a separate, local database to use during development.

Repository Set-up:
- Create a new repository on GitHub named `book_app`. Add your partner(s) as collaborator(s). Clone this repository into your `codefellows/301` directory. 
- From this point on, work on semantically-named non-master branches. Once your app is functioning correctly on your branch, make a PR to master and confirm functionality on your deployed site. Your deployed site **should not** contain any broken functionality.

*1. As a user, I want to render my application server-side so that my users experience faster load times.*

- For server-side rendering, EJS looks for a folder called `views`. Create a `views` folder. Within this folder, create a file called `index.ejs`. 
  - Note: with server-side rendering, `index.ejs` is analogous to the typical `index.html` file that you are used to, but will also allow EJS syntax for templating.
- Create a basic HTML scaffold in your `index.ejs` file which contains several elements that you can view in the browser, such as a heading element that says "Hello World". Also create a basic CSS file with several rules, such as an obvious background color. These will serve as our "proof of life" that the files are connected as expected, both locally and when deployed. You will later remove these.
- Create a basic `server.js` file. Make sure your server is listening for connections on a `PORT`. Remember to set the view engine and serve your static CSS files.
- Install any necessary NPM packages and ensure that they are documented as dependencies in your `package.json`.
- For testing purposes, include a temporary route such as `app.get('/test')` and render your `index.ejs` file. Turn on your server and validate that the HTML elements and basic CSS styles are being rendered as expected.

*2. As a user, I want to host my app on a reliable, scalable application hosting service so that I can access my mobile app when I'm on the go and share it with others.*

TODO: decide if I want to keep my name in here
TODO: do we want them to deploy from CLI or GUI? let them pick?
- From the command line, navigate into your server repository and enter the command `heroku create <partner 1 initials>-<partner 2 initials>-booklist`. For example, Allie and Sam would create their instance with the following command: `heroku create ag-sh-booklist`.
  - You will see your URL in the terminal, such as `https://ag-sh-booklist.herokuapp.com`.
- Return to your terminal and make sure to add and commit your changes. Then enter the command `git push heroku master` to push your instance to Heroku.
  - Look for a completion message and the bottom that says "Verifying deploy... done."
  - Navigate to your Heroku Dashboard and confirm that your Application instance appears.
- Validate that your application has been successfully deployed visiting your deployed site in the browser and navigating to the `/test` endpoint. Verify that the HTML elements are being rendered as expected. You may then remove this route from your server file, as well as the "proof of life" HTML elements and CSS styles.

*3. As a user, I want to seed my local development database with books so I have data with which to test my development application.*

TODO: add link to instructions for pg:pull
- Within your PostgreSQL shell, create a new database with the command `CREATE DATABASE books_app;` or pull your provisioned database from Heroku (see the next user story for instructions on provisioning your database on Heroku).
- Create a new table in your database called `books`.
  - Create a schema for your `books` table. This schema should contain the following properties:
    - `id` as the primary key
    - `author`
    - `title`
    - `isbn`
    - `image_url`
    - `description`
- Use Postman to request book data from the Google Books API. For example, you can enter a search query at the end of this route: `https://www.googleapis.com/books/v1/volumes?q=`
- Manually enter each record into your `books` table.
- For reference, here is a sample:
```
  {
    "title": "Dune",
    "author": "Frank Herbert",
    "isbn": "ISBN_13 9780441013593",
    "image_url": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "description": "Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny."
  }
```

TODO: add pg:pull instructions

*4. As a user, I want the client application to have access to a deployed PostgreSQL database so the user data persists across application sessions.*

- Within your booklist instance on Heroku, go to the Resources tab. Search for "Postgres" and provision the free version to your app. This will automatically populate the `DATABASE_URL` config var in the Settings tab. Navigate to the Settings tab to verify.
- Migrate your local database to Heroku, using the following format for your command: `heroku pg:push books_app DATABASE_URL --app <partner 1 initials>-<partner 2 initials>-booklist`
  - **If you are testing locally,** connect your client using your local database.
  - **If you are testing the deployed backend,** connect your client to the DB using the defined `DATABSE_URL` environment variable.
  - _Note: Unless the local database is pushed to Heroku again, these databases will not be in sync from this point on._

*5. As a user, I want my books to be rendered dynamically so that I can view all of the books in my list in a single view.*

- Create a new endpoint at `GET /books` which will retrieve an array of book objects from the database, limited to only the `title`, `author`, and `image_url`. Include the results as data when rendering the index page.
- Build out your `index.ejs` file to display all of the books on the page. Follow correct EJS syntax to iterate over an array of book objects and render each one in a similar manner.
  - Display the title and author of each book.
  - Display a picture of the book cover.
  - Include a count of the total number of books that are in the DB.
- Test locally to verify that the books are displayed as expected. Redeploy your application and verify that the books are displayed as expected.

*6. As a user, I want a view which displays any error messages that occur during the usage of my book list application.*

- Create an error view and render this view any time an error occurs.

*7. As a user, I want a simple, clean looking UI so that my application is easy to navigate.*

- Style your site using a **mobile-only** approach. Use the provided wireframes as a general guideline for the minimum styling requirements, while adding your own personal taste and color palette.
- Ensure the proper use of SMACCS principles. You and your partner(s) may choose to use float-based layout, grid-based layout, Flexbox, or a combination of these.
- You will need to include icon fonts from a source such as Icomoon or FontAwesome for the social media icons you choose to include in the application.

## Stretch Goal

*As a developer, I want to automatically populate the database so my application is functioning efficiently.*

- Implement a NodeJS script that will read a JSON file and populate your PostgreSQL database with that content.
  - You will need to utilize the `fs` (file system) module from Node.
TODO: Add link to fs docs

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
