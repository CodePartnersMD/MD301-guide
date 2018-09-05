'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named findTheSmiths that finds any people whose last name is Smith.
// Use a positive lookahead regular expression pattern.
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

const findTheSmiths = (arr) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named theSmithNames which returns an array of names of the people whose
// last name is Smith, rather than an array of objects.
// ------------------------------------------------------------------------------------------------

const theSmithNames = (arr) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named findDollars that takes in an array of values and uses a positive lookahead
// regular expression pattern to return an array of the prices that are in dollars.
// ------------------------------------------------------------------------------------------------

const prices = ['100 dollars', '5 francs', '9 dollars', '115 rupees', '42 dollars', '20 pesos', '40 lira', '15 shillings', '12 pounds', '90 krones'];

const findDollars = (arr) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named lengthValues that returns the numbers of any lengths that are in inches units.
//
// You may use any lookahead or lookbehind regular expression pattern for this challenge.
//
// For example, '62 inches' returns 62.
// ------------------------------------------------------------------------------------------------

const lengths = ['62 inches', '2.5 meters', '54 inches', '19 inches', '4 feet', '80 inches', '44 inches', '52 inches', '5.5 feet', '600 centimeters', '1 meter', '8 inches']

const lengthValues = (arr) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named biologyCourses that uses a positive lookbehind regular expression pattern
// to return an array of all Biology courses.
// ------------------------------------------------------------------------------------------------

const courses = ['Biology 101', 'Biology 220', 'Math 101', 'Math 307', 'Math 202', 'Math 401', 'Art 101', 'Art 121', 'Theater 101', 'Psychology 101', 'Psychology 201', 'Geology 101', 'Geology 302'];

const biologyCourses = (arr) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named notBiology that uses a negative lookbehind regular expression pattern
// to return an array of all courses that are not Biology courses.
// ------------------------------------------------------------------------------------------------

const notBiology = (arr) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest challenges-14.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should return people with the last name of Smith', () => {
    expect(findTheSmiths(people)).toStrictEqual([ { name: 'John Smith' }, { name: 'Lisa Smith' }, { name: 'Tom Smith' }, { name: 'Will Smith' }, { name: 'Jaden Smith' } ]);
    expect(findTheSmiths(people).length).toStrictEqual(5);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array of names', () => {
    expect(theSmithNames(people)).toStrictEqual([ 'John Smith', 'Lisa Smith', 'Tom Smith', 'Will Smith', 'Jaden Smith' ]);
    expect(theSmithNames(people).length).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  test('It should only return currencies with the dollars unit', () => {
    expect(findDollars(prices)).toStrictEqual([ '100 dollars', '9 dollars', '42 dollars' ]);
    expect(findDollars(prices).length).toStrictEqual(3);
  });
});

describe('Testing challenge 4', () => {
  test('It should return the values for each length that is in inches units without the word "inches"', () => {
    expect(lengthValues(lengths)).toStrictEqual([ 62, 54, 19, 80, 44, 52, 8 ]);
    expect(lengthValues(lengths).length).toStrictEqual(7);
  });
});

describe('Testing challenge 5', () => {
  test('It should return only Biology courses', () => {
    expect(biologyCourses(courses)).toStrictEqual([ 'Biology 101', 'Biology 220' ]);
    expect(biologyCourses(courses).length).toStrictEqual(2);
  });
});

describe('Testing challenge 6', () => {
  test('It should return everything except Biology courses', () => {
    expect(notBiology(courses)).toStrictEqual([ 'Math 101', 'Math 307', 'Math 202', 'Math 401', 'Art 101', 'Art 121', 'Theater 101', 'Psychology 101', 'Psychology 201', 'Geology 101', 'Geology 302' ]);
    expect(notBiology(courses).length).toStrictEqual(11);
  });
});
