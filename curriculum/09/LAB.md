![CF](https://i.imgur.com/7v5ASc8.png) Lab 09: Persistence with a SQL database, continued

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

[Hiking Project API Docs](https://www.hikingproject.com/data)

## Configuration

- `.env` - with your PORT and API keys. Make sure this file is included in your `.gitignore`
- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
lab-09-repository
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

For this lab assignment, you will use the latitude and longitude to request information about hiking trals and campgrounds near the location.

Repository set-up: 
- One person from your group should create a new repository on GitHub called `lab-09-back-end`. Add your partner(s) as collaborator(s). Clone your repository.
- Follow the same code review process as lab 8.

Heroku Deployment:
- Once your app is functioning correctly on your master branch, deploy your back end to Heroku in the same manner as labs 6, 7, and 8. Create a new Heroku instance with your new partner(s) today. Your deployed site **should not** contain any broken functionality. 
- You will also need to provision a SQL database on Heroku, as you did in lab 8
- As you continue to work on features, make sure to check out your master branch and pull the changes after each pull request is merged. Then, create a new branch from your master branch and continue working. You may now begin your feature tasks for lab 9.

*1. As a user, I want to request information about trails and campgrounds in the area so that users can explore the location.*
- Create a route with a method of `get` and a path of `/trails`. The callback should make a Superagent-proxied request to the Hiking Project API using the necessary location information.
- Create a corresponding constructor function for the result.
- For each trail of the result, return an object which contains the necessary information for correct client rendering. Store these objects together and send them as the response to the client.
- Add the appropriate logic to store this response in a table and the ability to check the database upon subsequent requests. Update your schemas.
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
