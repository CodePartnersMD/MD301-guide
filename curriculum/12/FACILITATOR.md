![CF](https://i.imgur.com/7v5ASc8.png) Class 12: Componentization

## Overview

Today's lecture will focus on code modularization. When working on the previous lab, students wrote a single `index.ejs` file to render all of the books and an error view. Lab 12 will add the ability to select a single book, retrieve its details from the database, and render it in a new view (see the solution in `views/pages/show.ejs`).

Use this additional view as a talking point about making the code more DRY. Each view will have repeated content, which they may have already noticed when comparing the `index.ejs` and `error.ejs` files. Introduce the concept of partials and demonstrate how to abstract a repeated portion of HTML into a partial file, then require it in where needed. For example, they can move their head, header, and footer elements into partial files.

This is also a good opportunity to discuss DRY code and readability in their `server.js` files. Demonstrate how to abstract the route into a path and named callback, and then define the callback below. Also, remove repetition by creating an error handler callback which all routes can share. Each group may be at different points in their lab assignment, so use your discretion when deciding between building out the error handler or brainstorming how they will build it out during lab.

## How do I prep for today?

Review the solution code for lab 12. 

The demos folder contains an extended version of the to-do app. This demo shows how to abstract the head, header, and footer elements into partials, as well as how to separate the list view and error view.

The demos folder also contains an example of using the `fs` module to read a JSON file and populate the database. This demo does not necessarily need to be built in front of the class; it can be shown during lecture or added to the lecture repository if there is interest.

## What changed from the previous class?

Students will add a new view for displaying the details of a single book, including the description and ISBN. To do so, they will need an anchor tag and an `href` attribute that points to the book id. For example, `<a href="/books/1">`.

## What might students struggle with today?

Adapting their `index.ejs` file to include the `href` attribute.

## What bugs, issues, or surprises have come up in the past for this class?

## General comments

## Resources/Slides

## Lecture

## Code skeleton

## Whiteboard diagrams
