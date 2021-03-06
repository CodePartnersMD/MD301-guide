# Class 11: Server-side templating with EJS

## Overview

Today is the first day of the book application, a project that spans over labs 11 through 14. At some point during today's lecture, demonstrate the full solution code and point out the day-to-day features. This will give students an idea of where they are heading with their applications.

Students will work with the same partner for all four labs, so be mindful of which students are partnered together. During final projects, each team typically contains a balance of strong students and weaker students, so the book app is an opportunity to pair two strong students together and see how much they are able to accomplish.

At this point, students should feel comfortable working in the front end from module 1. They should also feel comfortable working in the back end with a static front end from module 2. However, the book app will be their first time writing a full-stack application, so look for patterns from module 1 and module 2 which students can be reminded of when they struggle during this module.

Server-side rendering is a new topic for students during this module. It will likely take a bit of time for students to adjust to this paradigm. Today's lecture will focus on creating a singular `index.ejs` file and an error view, with modularization into components addressed in the lectures and lab assignments for the remainder of the book app.

In lab 11, students will manually populate a database and write a route to retrieve all of the book objects and render them all in a single view. For your convenience, there is a file called `schema.sql` to easily load a table with ten books. To run this from the command line, type `psql -d <database-name> -f schema.sql`. This is for internal use only; do not share this file with students. 

## How do I prep for today?

- Prepare a 10-15 demonstration to introduce the topic of today's code challenges.

There are several demos in the `demos` folder for today. The `templating` demo includes a basic grocery list. This demo is intended to introduce students to EJS usage and syntax. The demo includes rendering an array of strings as well as rendering and array of objects. These are displayed in two separate views, so use this as an opportunity to discuss conditional rendering with EJS syntax. Then, refactor `list.ejs` using conditional logic. Begin with this demo before moving on to the to-do app, which demonstrates how to render data that was retrieved from a database. This demo will provide students with a frame of reference when beginning the book app in lab 11. 

Review the demo code and solution code for lab 11, as well as the technical requirements in the `LAB.md`. Give students just enough of the pattern. By this point, they should feel comfortable with the process of deploying an application on Heroku, setting up a PostgreSQL database, and working with third-party APIs.

## What changed from the previous class?
N/A

## What might students struggle with today?

The biggest new topic for today is server-side rendering. The syntax is straight-forward and [the EJS docs](http://ejs.co/) are easy to work with. 

Students may feel frustrated that they have to request data from the Google Books API through Postman, rather than by using Superagent. The purpose of this step is to look for books and then find the relevant pieces from the response. These relevant pieces should be manually entered into their local database. They will add the API functionality to their book app in lab 14.

Students will need to be mindful about the data types for each column of their table. A common error can occur when students try to add a book description that exceeds the size of their column if they choose a data type like `VARCHAR(255)`. This might become a problem in lab 11; however, it might not arise as an issue until lab 14 when the API search functionality is added.

A common source of SQL errors is the formatting of the description. For example, the Google Books API uses smart quotes but SQL only accepts straight quotes. Also, if they use single quotes to wrap the values of their INSERT statements, they will need to escape any apostrophes within the description using two single quotes (not a double quote!) like this: `''`. 

## What bugs, issues, or surprises have come up in the past for this class?

## General comments

- Make sure to discuss the benefits of server-side rendering, such as avoiding a flash of unstyled content [(FOUC)](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)
- Save the solution code for code review in Class 12, rather than showing the solution during Class 11 lecture. Note: do not distribute the book app solution code to students.

## Resources/Slides

## Lecture

## Code skeleton

## Whiteboard diagrams
