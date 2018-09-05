'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named validatePin that uses a regular expression pattern to validate a PIN.
//
// If the PIN is four digits long, return true. Otherwise, return false.
// ------------------------------------------------------------------------------------------------

const validatePin = (pin) => {
  //<solution>
  const pinPattern = /^\d{4}$/g;

  return pinPattern.test(pin);
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named findTagNames that iterates over an array of HTML strings
// and uses a regular expression pattern to return the closing tags.
//
// For example, findTagNames(['<h1>Hello, world!</h1>', '<p>Welcome to my site</p>'])
// returns ['/h1', '/p'].
// ------------------------------------------------------------------------------------------------

const findTagNames = elements => {
  //<solution>
  return elements.map(str => str.match(/<(\/\w?\d?)>/g))
    .map(result => result[0].slice(1, (result[0].length-1)));
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named validateEmail that takes in an email address and validates it based
// on several rules:
//   - one word or two words, separated by a period, before the @ symbol
//   - can contain numbers
//   - can have any of the following top-level domains: .net, .com, or .org
//
// Return either true or false.
// ------------------------------------------------------------------------------------------------

const validateEmail = (email) => {
  //<solution>
  const emailPattern = /\w+\.?\w+?@\w+.(net|com|org)/;

  return emailPattern.test(email);
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named validatePhoneNumber that accepts a phone number and determines if it is valid.
//
// Acceptable formats include:
//  - (555) 555-5555
//  - 555 555-5555
//  - 555-555-5555
//  - 555 555 5555
//  - 5555555555
//
// Your function should include a single regular expression pattern that matches any of these formats.
//
// Return either true or false.
// ------------------------------------------------------------------------------------------------

const validatePhoneNumber = (phoneNumber) => {
  //<solution>
  const phoneNumberPattern = /\(?\d{3}\)?-?\s?\d{3}-?\s?\d{4}/g;

  return phoneNumberPattern.test(phoneNumber);
  //</solution>
};


// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest solutions-11.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should validate a PIN of exactly four digits', () => {
    expect(validatePin(1234)).toBeTruthy();
    expect(validatePin(123)).toBeFalsy();
    expect(validatePin(12345)).toBeFalsy();
  });
});

describe('Testing challenge 2', () => {
  test('It should return the closing tags', () => {
    expect(findTagNames(['<h1>Hello, world!</h1>', '<p>Welcome to my site</p>'])).toStrictEqual([ '/h1', '/p' ]);
  });
});

describe('Testing challenge 3', () => {
  test('It should match a basic email', () => {
    expect(validateEmail('joe@codefellows.com')).toBeTruthy();
  });

  test('It should match if the email contains a period', () => {
    expect(validateEmail('joe.schmoe@codefellows.net')).toBeTruthy();
  });

  test('It should match if the email contains other top-level domains', () => {
    expect(validateEmail('joe@codefellows.org')).toBeTruthy();
  });

  test('It should match if the email contains a period and other top-level domains', () => {
    expect(validateEmail('joe.schmoe@codefellows.net')).toBeTruthy();
  });
});

describe('Testing challenge 4', () => {
  test('It should match the first acceptable phone number formats', () => {
    expect(validatePhoneNumber('(555) 555-5555')).toBeTruthy();
  });

  test('It should match the first acceptable phone number formats', () => {
    expect(validatePhoneNumber('555 555-5555')).toBeTruthy();
  });

  test('It should match the first acceptable phone number formats', () => {
    expect(validatePhoneNumber('555-555-5555')).toBeTruthy();
  });

  test('It should match the first acceptable phone number formats', () => {
    expect(validatePhoneNumber('555 5555555')).toBeTruthy();
  });

  test('It should match the first acceptable phone number formats', () => {
    expect(validatePhoneNumber('5555555555')).toBeTruthy();
  });
});
