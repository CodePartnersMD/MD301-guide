![CF](https://i.imgur.com/7v5ASc8.png) Lab 08: Persistence with a SQL database

## Code Challenge

## Submission Instructions

- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. Add a comment in your Canvas assignment which includes the following:
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment

## Resources

[SQL Syntax Cheatsheet](./cheatsheets/sql.md)

[PostgreSQL Shell Cheatsheet](./cheatsheets/postgres-shell.md)

[PostgreSQL Docs](https://www.postgresql.org/docs/)

[Meetup API Docs](https://www.meetup.com/meetup_api/)

## Configuration

- `.env` - with your PORT and API keys. Make sure this file is in your `.gitignore` so your keys are not pushed to GitHub.
- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
lab-08-repository
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   ├── schema.sql
   └── server.js
```

## User Stories and Feature Tasks

#### Overview

For this lab assignment, you will use the latitude and longitude to request information about movies filmed in the location and Yelp review for local restaurants.

Repository set-up: 
- One person from your group should create a new repository on GitHub called `lab-08-back-end`. Add your partner(s) as collaborator(s). Clone your repository.
- Follow the same code review process as lab 7.

Heroku Deployment:
- Once your app is functioning correctly on your master branch, deploy your back end to Heroku in the same manner as labs 6 and 7. Create a new Heroku instance with your new partner(s) today. Your deployed site **should not** contain any broken functionality. 
- You will also need to provision a SQL database on Heroku. To do so, nagivate to the Resources tab and in the Add-Ons, search for "Postgres" and provision the free version.
- As you continue to work on features, make sure to check out your master branch and pull the changes after each pull request is merged. Then, create a new branch from your master branch and continue working. You may now begin your feature tasks for lab 8.

*1. As a user, I want my application to persist search queries and API responses in a database so that I do not need to request the same information from the API every time.*
- Install and require the NPM PostgreSQL package `pg` in your server.js file.
- Add you connection string to your `.env` file as your `DATABASE_URL`.
  - Windows and Linux users: You should have retained the user/password from the pre-work for this course. Your OS may require that your connection string is composed of additional information including user and password. For example: `postgres://USER:PASSWORD@HOST:PORT/DBNAME`;
  - Mac users: `postgres://localhost:5432/DBNAME`;
- Pass the appropriate argument when instantiating a new Client.

*2. As a user, I want to write a series of SQL commands so that I can drop and create my tables in a single command.*
- Create a file called `schema.sql` which contains correct SQL queries to drop all of your tables and create them, if they do not already exist. All tables should be created in the same database.
- Execute this file from the command line with the following syntax: `psql -d <database-name> -f <filename>`.
  - For example, `psql -d city_explorer -f schema.sql`

*3. As a user, I want to check the database every time a user enters a search so that I can retrieve the information, if it exists.*
- Within your route callback, invoke your lookup function, passing the appropriate options. For example, you will need to include the search query, a function to execute if the records exist in the table, and a function to execute if the records do not exist in the table.
  - If the records exist, send them as the response to the client.
  - If the records do not exist, request the data from the appropriate APIs, as you have in labs 6 and 7. Store the results in the appropriate table in your database and send the API results as the response to the client.
- Redeploy your application.

*4. As a user, I want to request information about meetups in the area so that users can learn about the events taking place in the location.*
- Create a route with a method of `get` and a path of `/meetups`. The callback should make a Superagent-proxied request to the Meetup API using the necessary location information.
- Create a corresponding constructor function for the result.
- For each meetup of the result, return an object which contains the necessary information for correct client rendering. Store these objects together and send them as the response to the client.
- Add the appropriate logic to store this response in a table and the ability to check the database upon subsequent requests. Update your schemas.
- Redeploy your application.

## Stretch Goal

*As a developer, I want to make my code more DRY so that it is more efficient.*
- Create a single "lookup" function for all models to share.

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
