'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.
//
// Note: You might need to use the same method more than once.
//
// For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
// ------------------------------------------------------------------------------------------------

const count = (target, input) => {
  return input.reduce((accumulator, currentValue) => {
    const rowCount = currentValue.reduce((innerAccumulator, innerCurrentValue) => {
      if (innerCurrentValue === target) {
        return innerAccumulator + 1;
      }
      return innerAccumulator;
    }, 0);
    return accumulator + rowCount;
  }, 0);
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named replaceVowels that, given a string as input, uses either filter, map, and reduce to replace all vowels with empty spaces.
// ------------------------------------------------------------------------------------------------

const replaceVowels = input => {
  const vowelRegex = /[aeiou]/;
  return input.split('').map((x) => {
    return vowelRegex.test(x) ? ' ' : x;
  }).join('');
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named totalSum that, given an array of integer arrays as input, uses either filter, map, or reduce to calculate the total sum of all the elements in the array.
//
// Note: You might need to use the same method more than once.
// ------------------------------------------------------------------------------------------------

const totalSum = input => {
  return input.reduce((accumulator, currentValue) => accumulator + currentValue.reduce(
    (innerAccumulator, innerCurrentValue) => innerAccumulator + innerCurrentValue, 0),
  0);
};

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest chaining.solution.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
  });
});

describe('Testing challenge 2', () => {
  test('It should replace all vowels with a space', () => {
    expect(replaceVowels('Welcome to Code 301')).toStrictEqual('W lc m  t  C d  301');
  });
});

