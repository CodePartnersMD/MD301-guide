# Code 301: ES6 Introduction

This hour-long assignment is designed to give you an introduction to some features in [ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/), otherwise known as ES6.

In this exercise you'll be working with the following features of ES6:

- Variable declarations with `let` and `const`
- Arrow functions

## Instructions

Plan to spend about 10-15 minutes reading through this document and the linked references and about 10-15 minutes going over the materials in the adjoining `examples` directory.

After that, follow the instructions below to fork and clone this repository, and then spend about 30 minutes working in the starter code.
1. Fork and then clone the class repository from the link provided by the instructor in Slack into your `~/codefellows/301` directory, and navigate into that repo.
1. Work on your fork on a non-master branch. As you work, remember to add, commit, and push regularly.
1. Read through the following reference materials for each of these topics.
1. See the adjacent `examples` folder to compare examples of function declaration using `let` and `const` with the notation you have been using previously. To work through the examples, open `examples.html` in the browser, open your developer console, and follow the directions on the screen.
1. Once you complete the steps in the `examples.html` file, you are ready to move on to the `starter-code` folder.
1. The `starter-code` folder has its own `README.md` file with specific instructions, so read through and follow each step as you complete this exercise. That file also contains the submission instructions for this assignment.

## Variable declarations with `let` and `const`

- **`let`**
	- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
	- [caniuse.com](http://caniuse.com/#feat=let)
- **`const`**
	- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
	- [caniuse.com](http://caniuse.com/#feat=const)

We are familiar with the process of declaring a variable using `var`, and how that variable receives global or local scope depending on the context in which it was declared. If the variable is declared outside of any functions, it has global scope, but if it is declared inside a function, the variable is scoped to that function and not accessible globally.

With `let`, a variable declaration can be scoped to a code block `{ code }`, such as we commonly see with `for`,  `if`, or `while` constructions. As with variables declared with `var`, the values assigned to them can be reassigned to any type of value at any time, so long as the reassignment occurs within the same scope in which the variable was declared.

`const` is a little more complicated:

- Like `let`, `const` is also block-scoped.
- Variables initialized with `const` must be assigned a value at the time they are declared.
- Unlike variables declared with `var`, variables declared with `const` do not become properties of the `window` object.
- When `const` is used to assign to a variable one of the five primitive values in JavaScript (number, string, Boolean, null, undefined), the variable cannot be reassigned and attempting to do so will throw an error: "Uncaught TypeError: Assignment to constant variable."
- However, when a `const` variable is used to hold an object (and by extension arrays and functions, which are both objects in JavaScript), new properties can be assigned to the object and their values reassigned at will.

## Additional resources

- [Video from Fun Fun Function titled: “var, let and const - What, why and how.](https://www.youtube.com/watch?v=sjyJBL5fkp8)
- ["JavaScript ES6+: var, let, or const?" by Eric Elliott](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)
- ["ES6 let vs. const variables" by Wes Bos](http://wesbos.com/let-vs-const/)
