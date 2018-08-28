'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a regular expression pattern between the forward slashes to validate a PIN.
//
// If the PIN is four digits long, return true. Otherwise, return false.
// ------------------------------------------------------------------------------------------------

const pinPattern = /^\d{4}$/g;

const validatePin = (pin, pattern) => pattern.test(pin);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named something that, ....
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named something that, ....
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named something that, ....
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named something that, ....
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named something that, ....
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Write a function named something that, ....
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// CHALLENGE 8
//
// Write a function named something that, ....
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// CHALLENGE 9
//
// Write a function named something that, ....
// ------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------
// CHALLENGE 10
//
// Write a function named something that, ....
// ------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest regex-2.solution.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should validate a PIN of exactly four digits', () => {
    expect(validatePin(1234, pinPattern)).toBeTruthy();
    expect(validatePin(123, pinPattern)).toBeFalsy();
    expect(validatePin(12345, pinPattern)).toBeFalsy();
  });
});

// describe('Testing challenge 2', () => {
//   test('something specific', () => {
//     expect(true).toStrictEqual();
//   });
// });

// describe('Testing challenge 3', () => {
//   test('something specific', () => {
//     expect(true).toStrictEqual();
//   });
// });

// describe('Testing challenge 4', () => {
//   test('something specific', () => {
//     expect(true).toStrictEqual();
//   });
// });

// describe('Testing challenge 5', () => {
//   test('something specific', () => {
//     expect(true).toStrictEqual();
//   });
// });

// describe('Testing challenge 6', () => {
//   test('something specific', () => {
//     expect(true).toStrictEqual();
//   });
// });

// describe('Testing challenge 7', () => {
//   test('something specific', () => {
//     expect(true).toStrictEqual();
//   });
// });

// describe('Testing challenge 8', () => {
//   test('something specific', () => {
//     expect(true).toStrictEqual();
//   });
// });

// describe('Testing challenge 9', () => {
//   test('something specific', () => {
//     expect(true).toStrictEqual();
//   });
// });

// describe('Testing challenge 10', () => {
//   test('something specific', () => {
//     expect(true).toStrictEqual();
//   });
// });
