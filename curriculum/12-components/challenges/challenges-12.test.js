'use strict';
/* global describe, expect, test */

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named sortBackwards that takes in an array of numbers and returns the same array,
// with the numbers sorted, highest to smallest.
// ------------------------------------------------------------------------------------------------

const sortBackwards = (nums) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named alphabetize that takes in an array of strings and returns the same array,
// with the strings sorted alphabetically. 
// 
// In this alphabetization, capital letters come before lower case letters.
// For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.
// ------------------------------------------------------------------------------------------------

const alphabetize = (strings) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named sortByLength that takes in an array of strings and returns the same array,
// with the strings sorted by their length, lowest to highest.
// ------------------------------------------------------------------------------------------------

const sortByLength = (strings) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named alphabetizeBetter that takes in an array of strings and returns the same
// array, with the strings sorted alphabetically. Capitalization should not change the sort order 
// of two strings.
// ------------------------------------------------------------------------------------------------

const alphabetizeBetter = (strs) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named sortByPrice that takes in an array of objects, each of which has a 'price'
// property, and sorts those objects by price, lowest to highest, returning the same array.
//
// Here is an example of the input:
// [
//   {name: 'Sweatshirt', price: 45},
//   {name: 'Bookmark', price: 2.50},
//   {name: 'Tote bag', price: 15}
// ];
// ------------------------------------------------------------------------------------------------

const sortByPrice = (objs) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named sortNumbersByLength that takes in an array of numbers and sorts those numbers
// by their length.
//
// For example, [1, 14, 0.2, -281, 54782] is only correctly sorted in that order.
// ------------------------------------------------------------------------------------------------

const sortNumbersByLength = (nums) => {
  // Solution code here...
};

// -----------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Write a function named sortPeople that takes in an array of Person objects, each of which has
// firstName, lastName, and age properties, and sorts those people by their last names.
// ------------------------------------------------------------------------------------------------

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const people = [
  new Person('Wes', 'Washington', 25),
  new Person('Casey', 'Codefellow', 38),
  new Person('Stan', 'Seattle', 67),
];

const sortPeople = (people) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 8
//
// Write a function named sortPeopleBetter that takes in an array of Person objects, each of which has
// firstName, lastName, and age properties, and sorts those people by their last names.
//
// If two people share the same last name, alphabetize on their first name. 
// If two people have the same full name, the younger one should come first.
// ------------------------------------------------------------------------------------------------

const sortPeopleBetter = (people) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 9
//
// Write a function named sortMeetingsByDay that takes in an array of objects, each of which represents
// a meeting happening a particular day of the week, with a particular start time and end time.
//
// Sort the meetings by the day on which they happen, Monday-Friday.
// ------------------------------------------------------------------------------------------------

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

// helper object for days of week
const daysOfWeek = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4
};

const sortMeetingsByDay = (meetings) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 10
//
// This challenge should use the array of meetings from challenge 9, above.
//
// Sort the meetings in the order that they start. If two meetings start at the same time
// on the same day, the shorter meeting should come first.
// ------------------------------------------------------------------------------------------------

const sortSchedule = (meetings) => {
  // Solution code here...
};

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest challenges-12.test.js
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
    expect(alphabetize(['alphabet', 'Zebra', 'Alphabet', 'carrot'])).toStrictEqual([ 'Alphabet', 'Zebra', 'alphabet', 'carrot']);
  });
});

describe('Testing challenge 3', () => {
  test('It should sort strings by length', () => {
    const ans = sortByLength(['alphabet', 'Zebra', 'Alphabet', 'carrot']);
    expect(ans.slice(0,2)).toStrictEqual(['Zebra', 'carrot']);
    expect(ans.slice(2,4)).toEqual(expect.arrayContaining(['Alphabet', 'alphabet']));
  });
});

describe('Testing challenge 4', () => {
  test('It should alphabetize without regard to capitalization', () => {
    expect(alphabetizeBetter(['Alice', 'apple', 'alert', 'Average'])).toStrictEqual([ 'alert', 'Alice', 'apple', 'Average' ]);
  });
});

describe('Testing challenge 5', () => {
  test('It should sort items by their price', () => {
    expect(sortByPrice([
      {name: 'Sweatshirt', price: 45},
      {name: 'Bookmark', price: 2.50},
      {name: 'Tote bag', price: 15}
    ])).toStrictEqual([
      {name: 'Bookmark', price: 2.50},
      {name: 'Tote bag', price: 15},
      {name: 'Sweatshirt', price: 45},
    ]);
  });
});

describe('Testing challenge 6', () => {
  test('It should sort numbers by their length', () => {
    expect(sortNumbersByLength([10, 2.8, 1, -47.75])).toStrictEqual([1, 10, 2.8, -47.75]);
  });
});

describe('Testing challenge 7', () => {
  test('It should sort people by their last names', () => {
    expect(sortPeople(people)).toStrictEqual([
      new Person('Casey', 'Codefellow', 38),
      new Person('Stan', 'Seattle', 67),
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
  test('It should sort meetings by the day on which they happen', () => {
    const sortedMeetings = sortMeetingsByDay(meetings);
    expect(sortedMeetings.slice(0,2)).toEqual(expect.arrayContaining([new Meeting('Monday', '0900', '0945'), new Meeting('Monday', '0900', '1000')]));
    expect(sortedMeetings[2]).toStrictEqual(new Meeting('Tuesday', '1145', '1315'));
    expect(sortedMeetings.slice(3,5)).toEqual(expect.arrayContaining([new Meeting('Wednesday', '0930', '1000'), new Meeting('Wednesday', '1300', '1500')]));
    expect(sortedMeetings[5]).toStrictEqual(new Meeting('Friday', '1200', '1345'));
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
