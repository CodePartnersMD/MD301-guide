'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.
//
// Note: You may not use the array's built-in length property.
// ------------------------------------------------------------------------------------------------

const countNumberOfElements = input => {
  return input.reduce(accumulator => accumulator + 1, 0);
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named countNumberOfChildren that, given an array of characters, below, uses reduce to count the number of children in the array.
//
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

const countNumberOfChildren = input => {
  return input.reduce((accumulator, currentValue) => {
    return currentValue.children ? accumulator + currentValue.children.length : accumulator;
  }, 0);
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named extractState that, given the snorlaxData, below, uses reduce to return the object whose 'name' property matches the given string.
//
// If the input array does not have a stat with that specific name, the function should return null.
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

const extractStat = (statName, input) => {
  return input.reduce((accumulator, currentValue) => {
    return currentValue.stat.name === statName ? currentValue : accumulator;
  }, null);
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function that, given an array of numbers as input, uses ONE call to filter to
// calculate the array's average value.
// ------------------------------------------------------------------------------------------------

const calculateAverage = input => {
  let countAndSum =  input.reduce((accumulator, currentValue) => {
    return {
      count: accumulator.count + 1,
      sum: accumulator.sum + currentValue,
    };
  }, { count: 0, sum: 0 });

  return countAndSum.sum / countAndSum.count;
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named extractChildren that, given the array of characters from challenge 2, accomplishes the following:
// 1) Uses filter to return an array of the characters that contain the letter 'a' in their name
// 2) Then, uses reduce to return an array of all the children's names in the filtered array
//
// ------------------------------------------------------------------------------------------------

const extractChildren = input => {
  return input.filter(x => x.name.indexOf('a') >= 0).reduce((accumulator, currentValue) => {
    if (currentValue.children) {
      return accumulator.concat(currentValue.children);
    }
    return accumulator;
  }, []);
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named reversedString that takes in a string and returns a string with the letters in reverse order. 
//
// Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
// ------------------------------------------------------------------------------------------------

const reversedString = input => input.split('').reduce((accumulator, current) => current + accumulator, '');

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.
//
// You are welcome to use the provided isPrime function.
// ------------------------------------------------------------------------------------------------

const isPrime = value => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};

const countPrimeNumbers = input => {
  return input.reduce((accumulator, currentValue) => isPrime(currentValue) ? accumulator + 1 : accumulator, 0);
}

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest reduce.solution.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should return the length of the array', () => {
    expect(countNumberOfElements([1, 2, 3, 4, 5])).toStrictEqual(5);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the total number of children', () => {
    expect(countNumberOfChildren(characters)).toStrictEqual(14);
  });
});

describe('Testing challenge 3', () => {
  test('It should return any stats that match the input', () => {
    expect(extractStat('speed', snorlaxData.stats)).toStrictEqual({ stat: { url: 'https://pokeapi.co/api/v2/stat/6/', name: 'speed' }, effort: 5, baseStat: 30 });
  });
});

describe('Testing challenge 4', () => {
  test('It should return the average of the numbers in the array', () => {
    expect(calculateAverage([18, 290, 37, 4, 55, 16, 7, 85 ])).toStrictEqual(64);
  });
});

describe('Testing challenge 5', () => {
  test('something specific', () => {
    expect(extractChildren(characters)).toStrictEqual([ 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras' ]);
    expect(extractChildren(characters).length).toStrictEqual(10);
  });
});

describe('Testing challenge 6', () => {
  test('It should return the string with the characters in reverse order', () => {
    expect(reversedString('Code 301')).toStrictEqual('103 edoC');
  });
});

describe('Testing challenge 7', () => {
  test('It should return a count of the prime numbers in the array', () => {
    expect(countPrimeNumbers([1, 2, 13, 64, 45, 56, 17, 8])).toStrictEqual(3);
  });
});
