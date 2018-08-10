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

- `.env` - with your PORT and API keys. Make sure this file is in your `.gitignore` so your keys are not pushed to GitHub.
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

### Feature #1: Retrieve Meetup information

#### Why are we implementing this feature?

- As a user, I want to request information about meetups in the area so that users can learn about the events taking place in the location.

#### How are we implementing this feature?

- Make a request to the Meetups API for information about Meetups that are hosted in the location.

#### What specific steps do we need to follow?

- Create a route with a method of `get` and a path of `/meetups`. The callback should make a Superagent-proxied request to the Meetup API using the necessary location information.
- Create a corresponding constructor function for the result.
- For each meetup of the result, return an object which contains the necessary information for correct client rendering. See the sample response, below.
- Add the appropriate logic to store this response in a table and the ability to check the database upon subsequent requests. Update your schemas.
- Redeploy your application.

Endpoint:
`/meetups`

Example Response:
```sh
{
  "link": URL to the event page on Meetup.com,
  "name": the name of the group hosting the event,
  "creation_date": a date in the format of Mon Jan 01 2001,
  "host": the name of the hosts of the event
}
```

### Feature #2: Retrieve trail information

#### Why are we implementing this feature?

- As a user, I want to request information about trails and campgrounds in the area so that users can explore the location.

#### How are we implementing this feature?

- Make a request to the Hiking Project API for information about nearby trails.

#### What specific steps do we need to follow?

- Create a route with a method of `get` and a path of `/trails`. The callback should make a Superagent-proxied request to the Hiking Project API using the necessary location information.
- Create a corresponding constructor function for the result.
- For each trail of the result, return an object which contains the necessary information for correct client rendering. See the sample response, below.
- Add the appropriate logic to store this response in a table and the ability to check the database upon subsequent requests. Update your schemas.
- Redeploy your application.

Endpoint:
`/trails`

Example Response:
```sh
{
  "name": a string containing the name of the trail,
  "location": a string containing the city and state of the trail,
  "length": numeric distance of the trail,
  "stars": average rating of the trail,
  "star_votes": total votes for the trail,
  "summary": an overview of the trail,
  "trail_url": URL to the details on the Hiking Project website,
  "conditions": a string containing the most recent trail conditions,
  "condition_date": date in the format of YYYY-MM-DD,
  "condition_time": 
}
```

## Documentation

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```
