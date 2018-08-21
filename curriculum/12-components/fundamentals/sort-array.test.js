'use strict';
/* global describe, expect, test */

// -----------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named sortBackwards that takes in an array of numbers and returns the same array, with
// the numbers sorted, highest to smallest.

const sortBackwards = (nums) => {
  // your code here
};

// -----------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named alphabetize that takes in an array of strings and returns the same array, with
// the strings sorted alphabetically. (In this alphabetization, capital letters come before lower case
// letters, e.g. ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.)

const strs = ['alphabet', 'Zebra', 'Alphabet', 'carrot'];
const alphabetize = (strs) => {
  // your code here
};

// -----------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named sortByLength that takes in an array of strings and returns the same array, with
// the strings sorted by their length, low to high.

const sortByLength = (strs) => {
  // your code here
};

// -----------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named alphabetizeBetter that takes in an array of strings and returns the same
// array, with the strings sorted alphabetically. Capitalization should not change the sort order of two
// strings.
const alphabetizedStrs = ['Alice', 'apple', 'alert', 'Average'];
const alphabetizeBetter = (strs) => {
  // your code here
};

// -----------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named sortByPrice that takes in an array of objects, each of which has a `price`
// property, and sorts those objects by price, low to high, returning the same array.
const inventory = [
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];

const sortByPrice = (objs) => {
  // your code here
};

// -----------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named sortNumbersByLength that takes in an array of numbers and sorts those numbers
// by their length. (e.g., [1, 14, 0.2, -281, 54782] is only correctly sorted in that order)

const sortNumbersByLength = (nums) => {
  // your code here
};

// ----------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Write a function named sortPeople that takes in an array of Person objects, each of which has
// firstName, lastName, and age properties, and sorts those people by their last names.
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const people = [
  new Person('Wes', 'Washington', 25),
  new Person('Casey', 'Codefellow', 38),
  new Person('Sam', 'Seattle', 67),
];
const sortPeople = (people) => {
  // your code here
};

// -----------------------------------------------------------------------------------------------------
// CHALLENGE 8
//
// Write a function named sortPeopleBetter that takes in an array of Person objects, each of which has
// firstName, lastName, and age properties, and sorts those people by their last names. If two people
// share the same last name, alphabetize on their first name. If two people have the same full name, the
// younger one should come first.

const sortPeopleBetter = (people) => {
  // your code here
};


// -----------------------------------------------------------------------------------------------------
// CHALLENGE 9
//
// Write a function named sortMeetingsByLength that takes in an array of objects, each of which represents
// a meeting happening a particular day of the week, with a particular start time and end time. Sort
// those meetings by their length.

function Meeting(dayOfWeek, start, end) {
  this.dayOfWeek = dayOfWeek;
  this.start = start;
  this.end = end;
}
const meetings = [
  new Meeting('Monday', '0900', '1000'),
  new Meeting('Wednesday', '1300', '1500'),
  new Meeting('Tuesday', '1145', '1315'),
  new Meeting('Wednesday', '0930', '1000'),
  new Meeting('Monday', '0900', '0945'),
  new Meeting('Friday', '1200', '1345'),
];

const sortMeetingsByLength = (meetings) => {

};

// -----------------------------------------------------------------------------------------------------
// CHALLENGE 10
//
// Write a function named sortSchedule that takes in an array of objects, each of which represents a
// meeting happening a particular day of the week, with a particular start time and end time. Sort
// those meetings in the order that they start; if two meetings start at the same time on the same day,
// the shorter meeting should come first.

const sortSchedule = (objs) => {
  // your code here
};



// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest sort-array.test.js
//
// ------------------------------------------------------------------------------------------------


describe('Testing challenge 1', () => {
  test('It should sort high-to-low the numbers in an array', () => {
    const nums = [3,4,5,6,7];
    expect(sortBackwards(nums)).toStrictEqual([7,6,5,4,3]);
  });
});

describe('Testing challenge 2', () => {
  test('It should sort strings alphabetically', () => {
    expect(alphabetize(strs)).toStrictEqual([ 'Alphabet', 'Zebra', 'alphabet', 'carrot']);
  });
});

describe('Testing challenge 3', () => {
  test('It should sort strings by length', () => {
    const ans = sortByLength(strs);
    expect(ans.slice(0,2)).toEqual(['Zebra', 'carrot']);
    expect(ans.slice(2,4)).toEqual(expect.arrayContaining(['Alphabet', 'alphabet']));
  });
});

describe('Testing challenge 4', () => {
  test('It should alphabetize without regard to capitalization', () => {
    expect(alphabetizeBetter(alphabetizedStrs)).toStrictEqual([ 'alert', 'Alice', 'apple', 'Average' ]);
  });
});

describe('Testing challenge 5', () => {
  test('It should sort items by their price', () => {
    expect(sortByPrice(inventory)).toStrictEqual([
      {name: 'Bookmark', price: 2.50},
      {name: 'Tote bag', price: 15},
      {name: 'Sweatshirt', price: 45},
    ]);
  });
});

describe('Testing challenge 6', () => {
  test('It should sort numbers by their length', () => {
    const nums = [1, 2.8, 10, -47.75];
    expect(sortNumbersByLength(nums)).toStrictEqual([1, 10, 2.8, -47.75]);
  });
});

describe('Testing challenge 7', () => {
  test('It should sort people by their last names', () => {
    expect(sortPeople(people)).toStrictEqual([
      new Person('Casey', 'Codefellow', 38),
      new Person('Sam', 'Seattle', 67),
      new Person('Wes', 'Washington', 25),
    ]);
  });
});

describe('Testing challenge 8', () => {
  test('It should sort people with more strict ordering', () => {
    const family = [
      new Person('Casey', 'Codefellows', 55),
      new Person('Casey', 'Codefellows', 37),
      new Person('Charlie', 'Codefellows', 21),
      new Person('Charles', 'Codefellows', 29),
      new Person('Carol', 'Codefellow', 88),
    ];
    expect(sortPeopleBetter(family)).toStrictEqual([
      new Person('Carol', 'Codefellow', 88),
      new Person('Casey', 'Codefellows', 37),
      new Person('Casey', 'Codefellows', 55),
      new Person('Charles', 'Codefellows', 29),
      new Person('Charlie', 'Codefellows', 21),
    ]);
  });
});

describe('Testing challenge 9', () => {
  test('It should sort meetings by their length', () => {
    expect(sortMeetingsByLength(meetings)).toStrictEqual([
      new Meeting('Wednesday', '0930', '1000'),
      new Meeting('Monday', '0900', '0945'),
      new Meeting('Monday', '0900', '1000'),
      new Meeting('Tuesday', '1145', '1315'),
      new Meeting('Friday', '1200', '1345'),
      new Meeting('Wednesday', '1300', '1500'),
    ]);
  });
});

describe('Testing challenge 10', () => {
  test('It should sort meetings by when they happen', () => {
    expect(sortSchedule(meetings)).toStrictEqual([
      new Meeting('Monday', '0900', '0945'),
      new Meeting('Monday', '0900', '1000'),
      new Meeting('Tuesday', '1145', '1315'),
      new Meeting('Wednesday', '0930', '1000'),
      new Meeting('Wednesday', '1300', '1500'),
      new Meeting('Friday', '1200', '1345'),
    ]);
  });
});
