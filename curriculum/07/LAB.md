![CF](https://i.imgur.com/7v5ASc8.png) Class 07: Node, npm, Express, and APIs

## Code Challenge

## Submission Instructions

- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment

## Resources

[Yelp API Docs](https://www.yelp.com/developers/documentation/v3/business_search)

[The Movie DB API Docs](https://developers.themoviedb.org/3/getting-started/introduction)

## Configuration

- `.env` - with your PORT and API keys. Make sure this file is included in your `.gitignore`
- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
lab-07-repository
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   └── server.js
```

## User Stories and Feature Tasks

#### Overview

For this lab assignment, you will use the latitude and longitude to request information about movies filmed in the location and Yelp review for local restaurants.

Repository set-up: 
- One person from your group should create a new repository on GitHub called `lab-07-back-end`. Add your partner(s) as collaborator(s). Clone your repository.
- Select one person's lab 6 code to use for today's lab. The person whose code is selected should copy their lab 6 solution into the lab 7 repository. From the command line, use the `mv` command to copy _only_ the `server.js` file. Initialize your project with Node and install the necessary packages; confirm in your `package.json` file. Add, commit, and push to your master branch.

Code Review:
- From this point on, work on semantically-named non-master branches. 
- The student(s) whose lab 6 solution code was not selected should now be the driver. With your partner(s), identify three improvements. This should either be pieces of code that can be refactored or three sections of the code base to add verbose comments to. Note: you do not need to select one or the other. For example, you may select one section to comment on and two pieces of code that can be refactored, for a total of three improvements.
- Work on a new branch for each improvement. Add, commit, and push the changes one at a time and create a pull request to your master branch on GitHub. These will serve as the first three commits and pull requests which your TA will review during grading, so pay attention to your Git/GitHub workflow. Make sure to check out your master branch and pull the changes after each pull request is merged, then create a new branch for the next refactor/comment.
- Once your app is functioning correctly on your master branch, deploy your back end to Heroku in the same manner as lab 6. Your deployed site **should not** contain any broken functionality. You may now begin your feature tasks for lab 7.

*1. As a user, I want my application to use constructors for each model so that I can ensure my objects are created the same way each time and will have the ability to inherit methods.*
- Refactor your code base to use constructor functions, one per API response. 
- Refer to the client code base to determine the properties each model requires.

*2. As a user, I want to use `.map` instead of `.forEach` so that I can return an array of my object instances in one step.*
- Refactor your `getWeather` callback to use `.map` and send the resulting array as your response to the client.
- Redeploy your application.

*3. As a user, I want to request information about restaurants in the area so that users can view recommendations based on the search query.*
- Create a route with a method of `get` and a path of `/yelp`. The callback should make a Superagent-proxied request to the Yelp API using the necessary location information. Note: review the Superagent docs regarding setting authorization headers.
- Create a corresponding constructor function for the result.
- For each business of the result, return an object which contains the necessary information for correct client rendering. Store these objects together and send them as the response to the client.
- Redeploy your application.

*4. As a user, I want to request information about movies that were set in the area so that users can learn more about the location.*
- Create a route with a method of `get` and a path of `/movies`. The callback should make a Superagent-proxied request to The Movie Database API using the necessary location information.
- Create a corresponding constructor function for the result.
- For each movie of the result, return an object which contains the necessary information for correct client rendering. Store these objects together and send them as the response to the client.
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
