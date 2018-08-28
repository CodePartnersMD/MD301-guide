'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.
//
// For example, oddValues([1,2,3]) returns [1,3].
// ------------------------------------------------------------------------------------------------

const oddValues = input => input.filter(x => x % 2 === 1);

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named filterStringsWithVowels that, given an array of strings as input, uses filter to return an array with only words that contain vowels.
//
// For example, filterStringsWithVowels('gregor','hound','xyz') returns ['gregor', 'hound'].
// ------------------------------------------------------------------------------------------------

const vowelRegex = /[aeiou]/;

const filterStringsWithVowels = input => input.filter(x => vowelRegex.test(x));

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.
//
// For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].
// ------------------------------------------------------------------------------------------------

const notInFirstArray = (forbiddenValues, input) => {
  return input.filter(x => !forbiddenValues.includes(x));
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named getBaseStatGreaterThan that, given the snorlaxData, below, and an integer as input, uses filter to return an array containing all stats with a baseStat greater than the integer.
//
// For example, getBaseStatGreaterThan(snorlaxData.stats, 50) will return an array containing the 'special-defense' and 'special-attack' objects.
// ------------------------------------------------------------------------------------------------

const snorlaxData = {
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

const getBaseStatGreaterThan = (input, maxBaseStat) => {
  return input.filter(x => x.baseStat > maxBaseStat);
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named getStatName that is an extension of your getBaseStatGreaterThan function from challenge 4. For this function, extend your solution from challenge 4 to only return the name of the stat, rather than the entire stat object.
//
// For example, getStatName(snorlaxData.stats, 50) will return ['special-defense', 'special-attack'].
// ------------------------------------------------------------------------------------------------

const getStatName = (input, maxBaseStat) => {
  return input.filter(x => x.baseStat > maxBaseStat).map(x => x.stat.name);
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named getCharactersWithoutChildren that, given the array of characters, below, uses filter to return an array of all characters without children.
// ------------------------------------------------------------------------------------------------

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const getCharactersWithoutChildren = (input) => {
  return input.filter(x => !x.children);
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Write a function named evenOddNumericValues that, given an array as input, uses filter to remove any non-numeric values, then uses map to generate a new array with the string 'even' or 'odd' depending on the original input array.
// For example: evenOddNumericValues(['Gregor', 2, 4, 1]) returns ['even', 'even', 'odd'].
// ------------------------------------------------------------------------------------------------

const evenOddNumericValues = (input) => {
  return input.filter(x => typeof x === 'number').map(x => x % 2 === 0 ? 'even' : 'odd');
};

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest filter.solution.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should return an array containing only odd integers', () => {
    expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 3, 5, 7, 9]);
    expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toStrictEqual(5);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array containing only words that have vowels', () => {
    expect(filterStringsWithVowels(['gregor','hound','xyz'])).toStrictEqual(['gregor', 'hound']);
    expect(filterStringsWithVowels(['gregor','hound','xyz']).length).toStrictEqual(2);
  });

  test('It should not contain any words that do not contain vowels', () => {
    expect(filterStringsWithVowels(['gregor','hound','xyz'])).not.toContain('xyz');
  })
});

describe('Testing challenge 3', () => {
  const firstNums = [1, 2, 3];
  const secondNums = [1, 2, 3, 4];

  const firstStrings = ['Demi', 'Gregor', 'Hound'];
  const secondStrings = ['Gary', 'Charlotte', 'Demi', 'Gregor', 'Hound'];

  test('It should return an array that includes any elements not in the first array', () => {
    expect(notInFirstArray(firstNums, secondNums)).toStrictEqual([4]);
    expect(notInFirstArray(firstNums, secondNums).length).toStrictEqual(1);
  });

  test('It should also work with an array of strings', () => {
    expect(notInFirstArray(firstStrings, secondStrings)).toStrictEqual(['Gary', 'Charlotte']);
    expect(notInFirstArray(firstStrings, secondStrings).length).toStrictEqual(2);
  });
});

describe('Testing challenge 4', () => {
  test('It should return an array containing the stats that are greater than the input', () => {
    expect(getBaseStatGreaterThan(snorlaxData.stats, 75)).toStrictEqual([ { stat: { url: 'https://pokeapi.co/api/v2/stat/5/', name: 'special-defense' }, effort: 2, baseStat: 110 } ]);
    expect(getBaseStatGreaterThan(snorlaxData.stats, 75).length).toStrictEqual(1);
  });
});

describe('Testing challenge 5', () => {
  test('It should return the name of the stats that exceed that maximum', () => {
    expect(getStatName(snorlaxData.stats, 50)).toStrictEqual([ 'special-defense', 'special-attack' ]);
    expect(getStatName(snorlaxData.stats, 50).length).toStrictEqual(2);
  });

  test('It should return the name of the stats that exceed that maximum', () => {
    expect(getStatName(snorlaxData.stats, 120)).toStrictEqual([]);
    expect(getStatName(snorlaxData.stats, 120).length).toStrictEqual(0);
  });
});

describe('Testing challenge 6', () => {
  test('It should return an array containing characters who do not have children', () => {
    expect(getCharactersWithoutChildren(characters)).toStrictEqual([ { name: 'Sansa', spouse: 'Tyrion', house: 'Stark' }, { name: 'Jon', spouse: null, house: 'Snow' } ]);
    expect(getCharactersWithoutChildren(characters).length).toStrictEqual(2);
  });
});

describe('Testing challenge 7', () => {
  test('It should remove non-integers and return "even" or "odd', () => {
    expect(evenOddNumericValues(['Gregor', 2, 4, 1])).toStrictEqual(['even', 'even', 'odd']);
    expect(evenOddNumericValues(['Gregor', 2, 4, 1]).length).toStrictEqual(3);
  });
});