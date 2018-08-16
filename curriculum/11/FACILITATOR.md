Class 11: Server-side templating with EJS

## Overview

Today is the first day of the book application, a project that spans over labs 11 through 14. Students will work with the same partner for all four labs, so be mindful of which students are partnered together. During final projects, each team typically contains a balance of strong students and weaker students, so the book app is an opportunity to pair two strong students together and see how much they are able to accomplish.

At this point, students should feel comfortable working in the front end from module 1. They should also feel comfortable working in the back end with a static front end from module 2. However, lab 10 was the first time they wrote all of the code and made the front end and back end communicate with each other. The book app will be their second time writing a full-stack application, so look for patterns from module 1 and module 2 which students can be reminded of when they struggle during this module.

Server-side rendering is a new topic for students during this module. It will likely take a bit of time for students to adjust to this paradigm. Today's lecture will focus on creating a singular `index.ejs` file and an error view, with modularization into components addressed in the lectures and lab assignments for the remainder of the book app.

In lab 11, students will manually populate a database and write a route to retrieve all of the book objects and render them all in a single view.

_Note: the `demos` folder contains the to-do application before templating and after templating. The purpose of these two demos is for instructor reference. The revised version of the book app is being introduced in September 2018, so it will serve as a starting point for instructors who have delivered the original book app to acclimate to the revised version of the book app. Students should only be introduced to the pattern that includes EJS, which can be found in the `todo-after-templating` folder._ 

## How do I prep for today?

There are several demos in the `demos` folder for today. The `templating` demo includes a basic grocery list. This demo is intended to introduce students to EJS usage and syntax. The demo includes rendering an array of strings as well as rendering and array of objects. These are displayed in two separate views, so use this as an opportunity to discuss conditional rendering with EJS syntax. Then, refactor `list.ejs` using conditional logic. Begin with this demo before moving on to the to-do app, which demonstrates how to render data that was retrieved from a database. This demo will provide students with a frame of reference when beginning the book app in lab 11. 

Review the demo code and solution code for lab 11, as well as the technical requirements in the `LAB.md`. Give students just enough of the pattern. By this point, they should feel comfortable with the process of deploying an application on Heroku, setting up a PostgreSQL database, and working with third-party APIs.

## What changed from the previous class?
N/A

## What might students struggle with today?

The biggest new topic for today is server-side rendering. The syntax is straight-forward and [the EJS docs](http://ejs.co/) are easy to work with. 

Students may feel frustrated that they have to request data from the Google Books API through Postman, rather than by using Superagent. The purpose of this step is to look for books and then find the relevant pieces from the response. These relevant pieces should be manually entered into their local database. They will add the API functionality to their book app in lab 14.

Students will need to be mindful about the data types for each column of their table. A common error can occur when students try to add a book description that exceeds the size of their column if they choose a data type like `VARCHAR(255)`. This might become a problem in lab 11; however, it might not arise as an issue until lab 14 when the API search functionality is added.

## What bugs, issues, or surprises have come up in the past for this class?

## General comments

- Save the solution code for code review in Class 12, rather than showing the solution during Class 11 lecture. Note: do not distribute the book app solution code to students.

## Resources/Slides

## Lecture

## Code skeleton

## Whiteboard diagrams
