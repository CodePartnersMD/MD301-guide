'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a for loop that will push all of the elements from the first array into the second array.
// ------------------------------------------------------------------------------------------------

let first = [1, 2, 3, 4, 5];
let second = [];

for(let i = 0; i < first.length; i++) {
  second.push(first[i]);
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Iterate over every exam score and add 5 bonus points to each score. Use the for...of syntax.
// ------------------------------------------------------------------------------------------------

let rawScores = [55, 79, 100, 85, 92];

let bonusPoints = [];

for(let score of rawScores) {
  bonusPoints.push(score + 5);
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Use the same exam scores and increase each score by 5%. Use the for...in syntax.
// ------------------------------------------------------------------------------------------------

let curvedScores = [];

for(let score in rawScores) {
  curvedScores.push(rawScores[score] * 1.05);
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named pushIt that adds a number to the array. Then, write a for loop that will invoke the incrementor function five times, passing in 8 as the argument.
// ------------------------------------------------------------------------------------------------

let eights = [];

function pushIt(num) {
  eights.push(num)
}

for(let i = 0; i < 5; i++) {
  pushIt(8);
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named greeting that takes in a string and returns the string in all uppercase letters. Write the greeting function as a function declaration. 
// 
// Then, write a function named speaker that takes in a string and a callback function. The speaker function should return the string in all uppercase letters by invoking the callback only. Write the speaker function as a function expression.
// ------------------------------------------------------------------------------------------------

let greeting = function(word) {
  return word.toUpperCase();
}

function speaker(message, callback) {
  return callback(message);
}

speaker('hello 301 students!', greeting);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named removeElement that takes in a number and an array. If (number % 3 === 2), pop one element off of the array. Then, write a for loop to invoke the removeElement function once for every element in the array of numbers.
// ------------------------------------------------------------------------------------------------

let firstNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeElement(num, input) {
  if(num % 3 === 2) {
    input.pop();
  }
}

for(let i = 0; i < firstNumbers.length; i++) {
  removeElement(firstNumbers[i], firstNumbers);
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Use forEach to produce the same output as challenge 6. For this challenge, pass removeElement in as a named callback as the argument to forEach.
// ------------------------------------------------------------------------------------------------

let secondNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

secondNumbers.forEach(number => removeElement(number, secondNumbers));

// ------------------------------------------------------------------------------------------------
// CHALLENGE 8
//
// Use forEach to produce the same output as challenge 6. For this challenge, turn your removeElement function into an anonymous function as the argument to forEach. This anonymous function should accept three arguments: the element, the index, and the array.
// ------------------------------------------------------------------------------------------------

let thirdNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

thirdNumbers.forEach(function(number, idx, arr) {
  if(number % 3 === 2) {
    arr.pop();
  }
});

// ------------------------------------------------------------------------------------------------
// CHALLENGE 9
//
// Use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list.
// ------------------------------------------------------------------------------------------------

let inventory = [
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

let list = [];

inventory.forEach(item => {
  if(item.available) {
    list.push(item.name)
  }
})

// ------------------------------------------------------------------------------------------------
// CHALLENGE 10
//
// Write a function named fizzbuzz that takes in a number. If the number is divisible by 3, add the word "Fizz" to the output array. If the number is divisible by 5, add the word "Buzz" to the output array. If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array. Otherwise, add the number to the output array. Use forEach with arrow notation to invoke the fizzbuzz function for every number in the inputs array.
// ------------------------------------------------------------------------------------------------

let inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let output = [];

let fizzbuzz = function(num) {
  if(num % 5 === 0 && num % 3 === 0) {
    output.push('Fizz Buzz');
  } else if (num % 3 === 0) {
    output.push('Fizz');
  } else if (num % 5 === 0) {
    output.push('Buzz');
  } else {
    output.push(num);
  }
}

inputs.forEach(input => fizzbuzz(input));
