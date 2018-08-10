![CF](https://i.imgur.com/7v5ASc8.png) 14: Google Books API

## Overview

Today may also be an opportunity for a group debugging session or general catching up.

Today's lecture will return students to working with a third-party API and Superagent, as they did in module 2. The implementation of this lab will take place in two parts: creating a search field with a way for the user to indicate if they are searching by title or by author, and adding the user's search terms as part of the Superagent request to the Google Books API.

When the search results are rendered in a list view, the properties of each book will be populated in a hidden form. This concept will be brand new to students. Use this as a discussion point about hiding information from users as a way to avoid making additional API calls. Discuss other approaches, such as creating a separate table to temporarily hold the search results. Use your discretion when deciding if you should show the hidden search functionality or discuss it as a potential option. Gauge your cohort and adjust accordingly. Regardless, show students the hidden form functionality during code review at the beginning of lecture 15.

The solution code for today also includes routes to update or delete a book. There is no corresponding functionality for these routes, but they are meant as a demonstration so students can see how they may build out this functionality for their book app and/or for their final projects. Again, use your discretion about sharing these routes, as this is a stretch goal for lab 14. It may help to show students the routes in `server.js` as a starting point.

## How do I prep for today?

Review the solution code for lab 14, especially the hidden form functionality.

## What changed from the previous class?

There are now two folders within the `pages` folder: books and searches. The code base is being further componentized to separate the two models. The books pages include the same functionality they have built up to this point. The searches pages include the field for searching the API and displaying the search results in a new view with a hidden form.

## What might students struggle with today?

Splitting and joining the search query to account for multiword searches. Providing default values in the case of a response that is missing information. Modifying the search results before rendering them on the page. The hidden form when displaying the search results.

## What bugs, issues, or surprises have come up in the past for this class?

## General comments

## Resources/Slides

## Lecture

## Code skeleton

## Whiteboard diagrams
