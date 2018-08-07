![CF](https://i.imgur.com/7v5ASc8.png)


## Overview

Lecture 13 focuses on the ability to display a form which will allow the user to manually enter a new book, then add that book to their existing database. They will need two routes: one to display the form to the user (see `app.get('/books/new', newBook);` in the solution code) and another to take the user's input and add it to their SQL database (see `app.post('/books', createBook);` in the solution code).

This is likely the first time that students have used method and action attributes in an HTML5 form. It is also the first time they have written a POST route and accessed properties of the request.body object. This is a good opportunity to introduce destructuring.

Students should think about the fields their form will require; this may be a good opportunity to brainstorm as a class or with a nearby classmate on how the form should be structured. The final usability of the form will be tested by students requesting a new book from the Google Books API in Postman, then manually entering (or likely, copying and pasting) the information from the response into their form. Lab 14 will add the ability to search the Google Books API, so assure students that this is where the book app is heading if there are questions or comments about the potentially tedious nature of manually adding a book.

If successful, the book should be added to the database and the user should receive a message that the book was added. The detail view will be reused, so this provides the opportunity to use conditional logic in their EJS files, if they have not already done so.

Throughout the week, and especially today with the additional feedback to the user, discuss UI/UX considerations. For example, does the user need to receive feedback about the success/failure of their book being added? What is the most logical and user-friendly way to do so?

## How do I prep for today?

Review the solution code for lab 13.

## What changed from the previous class?

There is now a form where a user can manually add a new book.

## What might students struggle with today?

HTML5 forms with method and action attributes are new to students. Also, this is the first time they will be working with the request object. It is common for students to panic when they see a known concept in a new context; reassure students that the request is just an object, like the objects they worked with throughout all of module 2. 

## What bugs, issues, or surprises have come up in the past for this class?

## General comments

Do not forget to discuss this line of code: `app.use(express.urlencoded({extended:true}));
`

## Resources/Slides

## Lecture

## Code skeleton

## Whiteboard diagrams
