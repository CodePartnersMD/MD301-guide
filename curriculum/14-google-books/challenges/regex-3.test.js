'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a positive lookahead regular expression pattern to return an array of the people objects whose last name is Smith. 
// ------------------------------------------------------------------------------------------------

const people = [
  {name: 'John Smith'},
  {name: 'Lisa Smith'},
  {name: 'Tom Smith'},
  {name: 'Joe Jones'},
  {name: 'Will Smith'},
  {name: 'Will Smythe'},
  {name: 'Johnny Appleseed'},
  {name: 'John Doe'},
  {name: 'Jane Doe'},
  {name: 'Jaden Smith'},
];

let smithPattern = 

let theSmiths = people.filter(person => person.name.match(smithPattern));

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named theSmithNames which returns an array of names, rather than an array of objects. 
//
// You may modify your solution from challenge 1 for this challenge.
// ------------------------------------------------------------------------------------------------




// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a positive lookahead regular expression pattern to return an array of the prices that are in dollars. 
// ------------------------------------------------------------------------------------------------

const prices = ['100 dollars', '5 francs', '9 dollars', '115 rupees', '42 dollars', '20 pesos', '40 lira', '15 shillings', '12 pounds', '90 krones'];

let dollarPattern = 

let dollars = prices.filter(price => price.match(dollarPattern));

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named lengthValues that returns the numbers of any lengths that are in inches units.
//
// You may use any lookahead or lookbehind for this challenge.
// ------------------------------------------------------------------------------------------------

const lengths = ['62 inches', '2.5 meters', '54 inches', '19 inches', '4 feet', '80 inches', '44 inches', '52 inches', '5.5 feet', '600 centimeters', '1 meter',  '8 inches']



// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named biologyCourses that uses a positive lookbehind regular expression pattern to return an array of all Biology courses.
// ------------------------------------------------------------------------------------------------

const courses = ['Biology 101', 'Biology 220', 'Math 101', 'Math 307', 'Math 202', 'Math 401', 'Art 101', 'Art 121', 'Theater 101', 'Psychology 101', 'Psychology 201', 'Geology 101', 'Geology 302'];




// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named notBiology that uses a negative lookbehind regular expression pattern to return an array of all courses that are not Biology courses.
// ------------------------------------------------------------------------------------------------




// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest regex-3.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should return people with the last name of Smith', () => {
    expect(theSmiths).toStrictEqual([ { name: 'John Smith' }, { name: 'Lisa Smith' }, { name: 'Tom Smith' }, { name: 'Will Smith' }, { name: 'Jaden Smith' } ]);
    expect(theSmiths.length).toStrictEqual(5);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array of names', () => {
    expect(theSmithNames).toStrictEqual([ 'John Smith', 'Lisa Smith', 'Tom Smith', 'Will Smith', 'Jaden Smith' ]);
    expect(theSmithNames.length).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  test('It should only return currencies with the dollars unit', () => {
    expect(dollars).toStrictEqual([ '100 dollars', '9 dollars', '42 dollars' ]);
    expect(dollars.length).toStrictEqual(3);
  });
});

describe('Testing challenge 4', () => {
  test('It should return the values for each length that is in inches units without the word "inches"', () => {
    expect(lengthValues).toStrictEqual([ 62, 54, 19, 80, 44, 52, 8 ]);
    expect(lengthValues.length).toStrictEqual(7);
  });
});

describe('Testing challenge 5', () => {
  test('something specific', () => {
    expect(biologyCourses).toStrictEqual([ 'Biology 101', 'Biology 220' ]);
    expect(biologyCourses.length).toStrictEqual(2);
  });
});

describe('Testing challenge 6', () => {
  test('something specific', () => {
    expect(notBiology).toStrictEqual([ 'Math 101', 'Math 307', 'Math 202', 'Math 401', 'Art 101', 'Art 121', 'Theater 101', 'Psychology 101', 'Psychology 201', 'Geology 101', 'Geology 302' ]);
    expect(notBiology.length).toStrictEqual(11);
  });
});
