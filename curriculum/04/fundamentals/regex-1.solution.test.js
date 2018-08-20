'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named regexTest that takes in a string and a regular expression. This function should use the .test() method.
// ------------------------------------------------------------------------------------------------

let regexTest = (input, comparison) => comparison.test(input);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named regexMatch that takes in a string and regular expression. This function should use the .match() method.
// ------------------------------------------------------------------------------------------------

let regexMatch = (input, comparison) => input.match(comparison);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a regular expression pattern between the forward slashes to match the input and return true. Use your regexTest or regexMatch functions from challenge 1 or challenge 2 to verify that your pattern is correct.
// ------------------------------------------------------------------------------------------------

let matchNums = 1234567890;

let numPattern = /[0-9]/g;

let numResult = regexTest(matchNums, numPattern);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a regular expression pattern between the forward slashes to find all words that begin with a capital letter. Modify the classroomMatch variable as needed to only return the four classrooms.
// ------------------------------------------------------------------------------------------------

let matchString = 'The four classrooms on campus are Lovelace, Hopper, Turing, and Babbage.';

let classroomPattern = /[A-Z][a-zA-Z]*/g;

let classroomMatch = regexMatch(matchString, classroomPattern);

classroomMatch.shift();

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named roomSchedule that returns the following string:
// 'Morning classes meet in Lovelace and Babbage. Afternoon classes meet in Hopper and Turing'
// ------------------------------------------------------------------------------------------------

let roomSchedule = arr => `Morning classes meet in ${arr[0]} and ${arr[3]}. Afternoon classes meet in ${arr[1]} and ${arr[2]}.`;

roomSchedule(classroomMatch);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a regular expression pattern between the forward slashes to find all of the instructors whose names begin with the letters A through J. 
// ------------------------------------------------------------------------------------------------

let instructors = 'Allie, Amanda, Brian, JB, John, Michelle, Sam, Scott, Steve, Vinicio';

let instructorPattern = /\b[A-J][A-Za-z]+/g;

regexMatch(instructors, instructorPattern);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// You have created an online form to ask users to enter their birth month. Write a regular expression pattern to match all of the possible inputs listed below. Do not use the vertical bar (pipe) in your pattern.
// ------------------------------------------------------------------------------------------------

let inputs = 'Jan jan January january';

let inputPattern = /Jan(uary)?/gi;

regexMatch(inputs, inputPattern);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 8
//
// Use the regexMatch function to find all of the words that contain a space immediately at the end of the sentence. For example, "amet" would not be returned because it is immediately followed by a comma.
// ------------------------------------------------------------------------------------------------

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia vel massa sed egestas. Nunc faucibus iaculis elit, a scelerisque enim condimentum sed. Aenean ac scelerisque sem, et pharetra diam.';

let spacePattern = /\w+\s/g
// or /[a-zA-Z]+\s/g;

regexMatch(lorem, spacePattern);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 9
//
// Use the replace method to remove all of the vowels (a, e, i, o, u) from the hangman string and replace them with an underscore. This will result in a printout where the string contains all consonants and underscores where the vowels were previously located.
// ------------------------------------------------------------------------------------------------

let hangman = 'This is a regex challenge. We are trying to create a hangman phrase where all of the vowels are missing!';

let puzzle = hangman.replace(/[a|e|i|o|u]/g, '_');

// ------------------------------------------------------------------------------------------------
// CHALLENGE 10
//
// Write a regular expression pattern to find all instances of the following words: "sells", "shells", "seashells". Do not use the vertical bar (pipe) character.
//
// Hint: All of these words end with the letters "ells".
// ------------------------------------------------------------------------------------------------

let seashells = 'She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I\'m sure she sells seashore shells.';

let shellPattern = /([a-z]ells)\b/g;

regexMatch(seashells, shellPattern);

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest regex-1.solution.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should return true if the pattern is matched', () => {
    expect(regexTest('abc', /[abc]/g)).toBeTruthy();
  });

  test('It should return false if the pattern is matched', () => {
    expect(regexTest('123', /[abc]/g)).toBeFalsy();
  });
});

describe('Testing challenge 2', () => {
  let matchLower = regexMatch('Welcome to Code 301', /[a-z]/g);
  let matchUpper = regexMatch('Welcome to Code 301', /[A-Z]/g);
  
  test('It should return an array of the values that match the pattern', () => {
    expect(matchLower).toStrictEqual([ 'e', 'l', 'c', 'o', 'm', 'e', 't', 'o', 'o', 'd', 'e' ]);
    expect(matchLower.length).toStrictEqual(11);
  });

  test('It should return an array of the values that match the pattern', () => {
    expect(matchUpper).toStrictEqual([ 'W', 'C' ]);
    expect(matchUpper.length).toStrictEqual(2);
  });
});

describe('Testing challenge 3', () => {
  test('It should return true if the pattern is correct', () => {
    expect(numResult).toBeTruthy();
  });
});

describe('Testing challenge 4', () => {
  test('It should return the four classrooms', () => {
    expect(classroomMatch).toStrictEqual([ 'Lovelace', 'Hopper', 'Turing', 'Babbage' ]);
    expect(classroomMatch.length).toStrictEqual(4);
  });

  test('It should not contain the word "The"', () => {
    expect(classroomMatch).not.toContain('The');
  });
});

describe('Testing challenge 5', () => {
  test('It should print out the string stating where each class meets', () => {
    expect(roomSchedule(classroomMatch)).toStrictEqual('Morning classes meet in Lovelace and Babbage. Afternoon classes meet in Hopper and Turing.');
  });
});

describe('Testing challenge 6', () => {
  let instructorMatch = regexMatch(instructors, instructorPattern);

  test('It should return the instructors whose names begin with the letters A through J', () => {
    expect(instructorMatch).toStrictEqual([ 'Allie', 'Amanda', 'Brian', 'JB', 'John' ]);
    expect(instructorMatch.length).toStrictEqual(5);
  });

  test('It should not return the instructors whose names begin with the letters K through Z', () => {
    expect(instructorMatch).not.toContain([ 'Michelle', 'Sam', 'Scott', 'Steve', 'Vinicio' ]);
  });
});

describe('Testing challenge 7', () => {
  test('It should match all four use inputs', () => {
    expect(regexMatch(inputs, inputPattern)).toStrictEqual([ 'Jan', 'jan', 'January', 'january' ]);
    expect(regexMatch(inputs, inputPattern).length).toStrictEqual(4);
  });
  
  test('The input pattern should not contain the vertical bar (pipe) character', () => {
    expect(inputPattern).not.toContain('|');
  });
});

describe('Testing challenge 8', () => {
  let loremMatch = regexMatch(lorem, spacePattern);

  test('It should only return words that are immediately followed by a space', () => {
    expect(loremMatch).toStrictEqual([ 'Lorem ', 'ipsum ', 'dolor ', 'sit ', 'consectetur ', 'adipiscing ', 'Cras ', 'lacinia ', 'vel ', 'massa ', 'sed ', 'Nunc ', 'faucibus ', 'iaculis ', 'a ', 'scelerisque ', 'enim ', 'condimentum ', 'Aenean ', 'ac ', 'scelerisque ', 'et ', 'pharetra ' ]);
    expect(loremMatch.length).toStrictEqual(23);
  });

  test('It should not contain words that are followed by any non-space character', () => {
    expect(loremMatch).not.toContain(['amet,', 'elit.', 'egestas.', 'elit,', 'sed.', 'sem,', 'diam.', 'nibh.', 'porttitor.', 'euismod,', 'ultrices.', 'massa,', 'vel,', 'purus.', 'purus,', 'odio.', 'aliquet,', 'non,', 'sem.'])
  });
});

describe('Testing challenge 9', () => {
  test('It should remove the vowels from the hangman string and replace them with underscores', () => {
    expect(puzzle).toStrictEqual('Th_s _s _ r_g_x ch_ll_ng_. W_ _r_ try_ng t_ cr__t_ _ h_ngm_n phr_s_ wh_r_ _ll _f th_ v_w_ls _r_ m_ss_ng!');
  });

  test('It should not contain the letters "a", "e", "i", "o", or "u"', () => {
    expect(puzzle).not.toContain('aeiou');
  })
});

describe('Testing challenge 10', () => {
  test('It should return the total number of instances of "sells", shells", and "seashells"', () => {
    expect(regexMatch(seashells, shellPattern).length).toStrictEqual(9);
  });
});
