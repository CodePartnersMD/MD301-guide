'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named twoToTheForLoop that, given an array of integers as input, uses a for loop to create an array where each element is 2 to the power of the original input element.
//
// You may choose to complete this challenge using a for loop, for...in, or for...of.
//
// Example:
// twoToThe([1,2,3]) returns [2,4,8]
// ------------------------------------------------------------------------------------------------

const twoToTheForLoop = (input) => {
  const output = [];
  for (const i in input) {
    output.push(2 ** input[i]);
  }
  return output;
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named twoToTheForEach that produces the same output as your twoToTheForLoop function from challenge 1, but uses forEach instead of a for loop.
// ------------------------------------------------------------------------------------------------

const twoToTheForEach = (input) => {
  const output = [];
  input.forEach((x) => {
    output.push(2 ** x);
  });
  return output;
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named twoToTheMap that produces the same output as your twoToTheForLoop function from challenge 1 and your twoToTheForEach function from challenge 2, but uses map instead of a for loop or forEach.
// ------------------------------------------------------------------------------------------------

const twoToTheMap = input => input.map(x => 2 ** x);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named charCode that, given an array of letters as an input, uses map to create an array where each element is the result of the `charCodeAt` on the original array element.
//
// Write your function on a single line.
//
// Read the MDN documentation on .charCodeAt if necessary.
//
// For example: charCode(['h','i']) returns [104, 105].
// ------------------------------------------------------------------------------------------------

const charCode = input => input.map(x => x.charCodeAt());

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function that, given an array as input, uses map to create an array where each element is either the string "even" or the string "odd" based on the input array.
//
// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
//
// For example: evenOdd([1,2,3]) returns ['odd','even','odd']
// ------------------------------------------------------------------------------------------------

const evenOdd = input => input.map((x) => {
  if (typeof x !== 'number') {
    return 'N/A';
  }
  return x % 2 === 0 ? 'even' : 'odd';
});

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Use the snorlaxAbilities data below for this challenge.
//
// Write a function named extractAbilities that, given an array of abilities, uses map to create an array containing only the ability name.
// ------------------------------------------------------------------------------------------------

const snorlaxAbilities = {
  abilities: [
    {
      slot: 3,
      is_hidden: true,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/82/',
        name: 'gluttony',
      },
    },
    {
      slot: 2,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/56/',
        name: 'cute charm',
      },
    },
    {
      slot: 1,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/17/',
        name: 'immunity',
      },
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractAbilities = abilities => abilities.map(x => x.ability.name);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Write a function named extractStats that, given an array of abilities, uses map to create an array of objects containing the stat name and the total. The total should be the sum of the effort and the baseStat.
//
// Here is an example of a single array element: { name: 'speed', total: 35 }
// ------------------------------------------------------------------------------------------------

const snorlaxStats = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStats = abilities => abilities.map(x => ({
  name: x.stat.name,
  total: x.effort + x.baseStat,
}));

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest map.solution.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('Positive integers should return in powers of 2', () => {
    expect(twoToTheForLoop([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(twoToTheForLoop([0, 4, 5]).length).toStrictEqual(3);
  });

  test('Negative values should produce decimals.', () => {
    expect(twoToTheForLoop([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 2', () => {
  test('Positive integers should return in powers of 2', () => {
    expect(twoToTheForEach([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(twoToTheForEach([0, 4, 5]).length).toStrictEqual(3);
  });

  test('Negative values should produce decimals.', () => {
    expect(twoToTheForEach([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 3', () => {
  test('Positive integers should return in powers of 2', () => {
    expect(twoToTheMap([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(twoToTheMap([0, 4, 5]).length).toStrictEqual(3);
  });

  test('Negative values should produce decimals.', () => {
    expect(twoToTheMap([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return an array containing the character code for each letter', () => {
    expect(charCode(['C', 'o', 'd', 'e', '3', '0', '1'])).toStrictEqual([ 67, 111, 100, 101, 51, 48, 49 ]);
    expect(charCode(['C', 'o', 'd', 'e', '3', '0', '1']).length).toStrictEqual(7);
  });
});

describe('Testing challenge 5', () => {
  test('It should return an array containing the keys from an object', () => {
    expect(evenOdd([5, 8, 2, 6, 9, 13, 542, 541])).toStrictEqual([ 'odd', 'even', 'even', 'even', 'odd', 'odd', 'even', 'odd' ]);
    expect(evenOdd([5, 8, 2, 6, 9, 13, 542, 541]).length).toStrictEqual(8);
  });

  test('It should work with all odd numbers', () => {
    expect(evenOdd([1, 3, 5, 7, 9])).toStrictEqual([ 'odd', 'odd', 'odd', 'odd', 'odd' ]);
    expect(evenOdd([1, 3, 5, 7, 9]).length).toStrictEqual(5);
  });

  test('It should work with all even numbers', () => {
    expect(evenOdd([2, 4, 6, 8, 10])).toStrictEqual([ 'even', 'even', 'even', 'even', 'even' ]);
    expect(evenOdd([2, 4, 6, 8, 10]).length).toStrictEqual(5);
  });
  
  test('It should return the string "N/A" if a non-integer is included in the array', () => {
    expect(evenOdd([5, 8, 2, 'hi'])).toStrictEqual([ 'odd', 'even', 'even', 'N/A' ]);
    expect(evenOdd([5, 8, 2, 'hi']).length).toStrictEqual(4);
  });
});

describe('Testing challenge 6', () => {
  test('It should return an array containing only the ability names', () => {
    expect(extractAbilities(snorlaxAbilities.abilities)).toStrictEqual(['gluttony', 'cute charm', 'immunity']);
    expect(extractAbilities(snorlaxAbilities.abilities).length).toStrictEqual(3);
  });
});

describe('Testing challenge 7', () => {
  test('It should return an array containing objects with name and total values', () => {
    expect(extractStats(snorlaxStats.stats)).toStrictEqual([
      { name: 'speed', total: 35, }, 
      { name: 'special-defense', total: 112, }, 
      { name: 'special-attack', total: 74, },
    ]);
    expect(extractStats(snorlaxStats.stats).length).toStrictEqual(3);
  });
});
