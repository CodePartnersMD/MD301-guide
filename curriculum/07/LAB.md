 Lab 07: Node, npm, Express, and APIs

## Code Challenge

## Submission Instructions

- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. Add a comment in your Canvas assignment which includes the following:
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment

## Resources

[Yelp API Docs](https://www.yelp.com/developers/documentation/v3/business_search)

[The Movie DB API Docs](https://developers.themoviedb.org/3/getting-started/introduction)

## Configuration

- `.env` - with your PORT and API keys. Make sure this file is in your `.gitignore` so your keys are not pushed to GitHub.
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
- Select one person's lab 6 code to use for today's lab. The person whose code is selected should copy their lab 6 solution into the lab 7 repository. From the command line, use the `cp` command to copy _only_ the `server.js` file. Initialize your project with Node and install the necessary packages; confirm in your `package.json` file. Add, commit, and push to your master branch.

Code Review:
- From this point on, work on semantically-named non-master branches. 
- The student(s) whose lab 6 solution code was not selected should now be the driver. With your partner(s), identify three improvements. This should either be pieces of code that can be refactored or three sections of the code base to add verbose comments to. Note: you do not need to select one or the other. For example, you may select one section to comment on and two pieces of code that can be refactored, for a total of three improvements.
- Work on one improvement at a time, making sure to add, commit, and push the changes as each improvement is complete. These will serve as the first three commits which your TA will review during grading, so pay attention to your Git/GitHub workflow. Once all three improvements are complete, create and merge a pull request to your master branch.

Heroku Deployment:
- Once your app is functioning correctly on your master branch, deploy your back end to Heroku in the same manner as lab 6. Create a new Heroku instance with your new partner(s) today. Your deployed site **should not** contain any broken functionality. You may now begin your feature tasks for lab 7.
- As you continue to work on features, make sure to check out your master branch and pull the changes after each pull request is merged. Then, create a new branch from your master branch and continue working.

### Feature #1: Consistently format data

#### Why are we implementing this feature?

- As a user, I want the application to provide properly formatted data so that I can view similar data for any location I choose.

#### How are we implementing this feature?

- A constructor function will ensure that each object is created according to the same format every time the server receives data from an API.
- The `.map` method will return an array of objects, which can then be sent as the JSON response to the client.

#### What specific steps do we need to follow?

- Refactor your code base to use constructor functions, one per API response. 
- Refactor your `getWeather` callback to use `.map` and send the resulting array as your response to the client. Continue to use `.map` for the remainder of labs 7, 8, and 9.
- Redeploy your application.

### Feature #2: Retrieve restaurant information

#### Why are we implementing this feature?

- As a user, I want to request information about restaurants in the area so that users can view recommendations based on the search query.

#### How are we implementing this feature?

- Make a request to the Yelp API for information about local businesses.

#### What specific steps do we need to follow?

- Create a route with a method of `get` and a path of `/yelp`. The callback should make a Superagent-proxied request to the Yelp API using the necessary location information. Note: review the Superagent docs regarding setting authorization headers.
- Create a corresponding constructor function for the result.
- For each business of the result, return an object which contains the necessary information for correct client rendering. See the sample response, below.
- Redeploy your application.

Endpoint:
`/yelp`

Example Response:
```sh
{
  "name": a string containing the name of the business,
  "image_url": a URL for the business,
  "price": average price,
  "rating": average rating,
  "url": URL to the business's website
}
```

### Feature #3: Retrieve movie information

#### Why are we implementing this feature?

- As a user, I want to request information about movies that were set in the area so that users can learn more about the location.

#### How are we implementing this feature?

- Make a request to The Movie Database API for information about movies filmed in the location.

#### What specific steps do we need to follow?

- Create a route with a method of `get` and a path of `/movies`. The callback should make a Superagent-proxied request to The Movie Database API using the necessary location information.
- Create a corresponding constructor function for the result.
- For each movie of the result, return an object which contains the necessary information for correct client rendering. See the sample response, below.
- Redeploy your application.

Endpoint:
`/movies`

Example Response:
```sh
{
  "title": a string containing the title of the film,
  "overview": a string containing a description of the film,
  "average_votes": average votes for the film,
  "total_votes": total votes for the film,
  "image_url": URL for the poster image,
  "popularity": numeric popularity score,
  "released_on": date in the format of YYYY-MM-DD
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
