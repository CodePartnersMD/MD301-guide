
'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named count that, given an integer and an array of arrays, uses either
// filter, map, or reduce to count the amount of times the integer is present in the array of arrays.
//
// Note: You might need to use the same method more than once.
//
// For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
// ------------------------------------------------------------------------------------------------

const count = (target, input) => {
  //<solution>
  return input.reduce((accumulator, currentValue) => {
    const rowCount = currentValue.reduce((innerAccumulator, innerCurrentValue) => {
      if (innerCurrentValue === target) {
        return innerAccumulator + 1;
      }
      return innerAccumulator;
    }, 0);
    return accumulator + rowCount;
  }, 0);
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named replaceVowels that, given a string as input,
// uses either filter, map, or reduce to replace all vowels with empty spaces.
// 
// You will likely need to use other methods as well.
// ------------------------------------------------------------------------------------------------

const replaceVowels = (input) => {
  //<solution>
  const vowelRegex = /[aeiou]/;
  return input.split('').map((x) => {
    return vowelRegex.test(x) ? ' ' : x;
  }).join('');
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named hyphenated that, given an array of strings,
// combines them into a single string with each word separated by a hyphen.
//
// For example, hypenated(['Babbage', 'Lovelace', 'Hopper', 'Turing']) returns 'Babbage-Lovelace-Hopper-Turing'.
// ------------------------------------------------------------------------------------------------

let hyphenated = (input) => {
  //<solution>
  return input.map(name => name.split('')).join('-').split(',').join('')
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4

// Write a function that, given an array of integer arrays as input, either filter, map, or reduce
// to calculate the total sum of all the elements in the array.
//
// Note: You might need to use the same method more than once.
// ------------------------------------------------------------------------------------------------

const totalSum = (input) => {
  //<solution>
  return input.reduce((accumulator, currentValue) => accumulator + currentValue.reduce(
    (innerAccumulator, innerCurrentValue) => innerAccumulator + innerCurrentValue, 0), 0);
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5

// Write a function named divisibleByFiveTwoToThePower that accpets an array of arrays as input. 
// 
// This function should first remove any elements that are not numbers and are not divisible by five.
// 
// This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.
// ------------------------------------------------------------------------------------------------

const divisibleByFiveTwoToThePower = (input) => {
  //<solution>
  return input.map((row) => {
    return row.filter(cell => typeof cell === 'number' && cell % 5 === 0).map(cell => 2 ** cell);
  });
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named findMaleAndFemale that, given the Star Wars data, below,
// returns the names of the characters whose gender is either male or female. 
//
// The names should be combined into a single string with each character name separated by "and".
//
// For example, "C-3PO and Luke Skywalker".
// ------------------------------------------------------------------------------------------------

let starWarsData = [{
	name: "Luke Skywalker",
	height: "172",
	mass: "77",
	hair_color: "blond",
	skin_color: "fair",
	eye_color: "blue",
	birth_year: "19BBY",
	gender: "male",
},
{
	name: "C-3PO",
	height: "167",
	mass: "75",
	hair_color: "n/a",
	skin_color: "gold",
	eye_color: "yellow",
	birth_year: "112BBY",
	gender: "n/a"},
  {
	name: "R2-D2",
	height: "96",
	mass: "32",
	hair_color: "n/a",
	skin_color: "white, blue",
	eye_color: "red",
	birth_year: "33BBY",
	gender: "n/a"
},
{
	name: "Darth Vader",
	height: "202",
	mass: "136",
	hair_color: "none",
	skin_color: "white",
	eye_color: "yellow",
	birth_year: "41.9BBY",
	gender: "male"
},
{
	name: "Leia Organa",
	height: "150",
	mass: "49",
	hair_color: "brown",
	skin_color: "light",
	eye_color: "brown",
	birth_year: "19BBY",
	gender: "female"
}]

let findMaleAndFemale = (data) => {
  //<solution>
  return data.filter(char => char.gender !== 'n/a').map(char => char.name).join(' and ');
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7

// Write a function named findShortest that, given the Star Wars data from challenge 6,
// returns the name of the shortest character.
//
// Note: There is an array method called .sort() which may be useful.
// ------------------------------------------------------------------------------------------------

let findShortest = (data) => {
  //<solution>
  return data.filter(char => char.gender !== 'n/a').map(char => {
    return {
      name: char.name,
      height: parseInt(char.height),
      mass: parseInt(char.mass),
      hair_color: char.hair_color,
      skin_color: char.skin_color,
      eye_color: char.eye_color,
      birth_year: char.birth_year,
      gender: char.gender
    }
  }).sort((a,b) => a.height - b.height)[0].name;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest challenges-10.test.js
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

describe('Testing challenge 3', () => {
  test('It should combine the strings with a hyphen', () => {
    expect(hyphenated(['Babbage', 'Lovelace', 'Hopper', 'Turing'])).toStrictEqual('Babbage-Lovelace-Hopper-Turing');
  });
});

describe('Testing challenge 4', () => {
  test('It should combine the strings with a hyphen', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7],[9, 2, 3, 6, ]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 5', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([ [ 1024, 1048576, 32 ], [ 32 ], [ 1024 ] ]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10 , 15]])).toStrictEqual([ [], [ 32, 1024, 32768 ] ]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10' , '15']])).toStrictEqual([ [], [] ]);
  });
});

describe('Testing challenge 6', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
  });
});

describe('Testing challenge 7', () => {
  test('It should return the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('Leia Organa');
  });
});
