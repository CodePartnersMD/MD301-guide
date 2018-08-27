'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named findFourteen that returns the number 14 from the nested array.
// ------------------------------------------------------------------------------------------------

let nestedArray = [ [ [1, 2, 3], [4, 5, 6] ], [ [7, 8, 9], [10, 11, 12] ], [ [13, 14, 15], [16, 17, 18] ] ];

function findFourteen(array) {
  return array[2][0][1];
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named howManyTreats that will return the quantity of treats you need to pick up from the pet store today.
// ------------------------------------------------------------------------------------------------

let errands = [
  { store: 'Grocery store',
    items: [ { name: 'Eggs', quantity: 12 }, { name: 'Milk', quantity: 1 }, { name: 'Apples', quantity: 3 }]
  },
  { store: 'Drug store',
    items: [ { name: 'Toothpaste', quantity: 1 }, { name: 'Toothbrush', quantity: 3 }, { name: 'Mouthwash',quantity: 1 } ]
  },
  { store: 'Pet store',
    items: [ { name: 'Cans of food', quantity: 8 }, { name: 'Treats', quantity: 24 }, { name: 'Leash', quantity: 1 } ]
  }
]

function howManyTreats(array) {
  return array[2].items[1].quantity;
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named calculateProduct that takes in a two-dimensional array of numbers, multiplies all of the numbers in each array, and returns the final product. This function should use a nested for loop and work for any number of inner arrays.
// 
// For example, the following input returns a product of 720: [[1,2], [3,4], [5,6]]
// ------------------------------------------------------------------------------------------------

function calculateProduct(numbers) {
  let product = 1;

  for(let i=0; i < numbers.length; i++) {
    for(let j=0; j < numbers[i].length; j++) {
      product *= numbers[i][j];
    }
  }
  return product;
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named averageDailyTemperature that accepts a two-dimensional array representing average daily temperatures grouped week-by-week. Calculate the average daily temperature. 
//
// Use the weeklyTemperatures array, below, as your data set.
//
// Write your function so it can accept an array containing any number of weeks.
// ------------------------------------------------------------------------------------------------

// Real daily average temperatures for Seattle, October 1-28, 2017
let weeklyTemperatures = [
  [66, 64, 58, 65, 71, 57, 60],
  [57, 65, 65, 70, 72, 65, 51],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57]
];

let averageDailyTemperature = input => {
  let sum = 0;

  for(let i=0; i < input.length; i++) {
    for(let j=0; j < input[i].length; j++) {
      sum += input[i][j];
    }
  }
  return sum;
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named lowestWeeklyAverage that accepts a two-dimensional array of daily temperatures grouped week-by-week.
//
// Use the same weeklyTemperatures data set from challenge 4, above.
//
// Calculate the average temperature for each week and return the value of the lowest weekly average temperature.
// 
// For example, lowestWeeklyAverage(weeklyTemperatures) returns 51.
// ------------------------------------------------------------------------------------------------

let lowestWeeklyAverage = input => {
  let lowest = weeklyTemperatures[0][0];

  for(let i=0; i < input.length; i++) {
    for(let j=0; j < input[i].length; j++) {
      if(input[i][j] < lowest) {
        lowest = input[i][j];
      }
    }
  }
  return lowest;
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named detectTicTacToeWin that accepts a 2D array of strings. Each string is
// guaranteed to be either "X", "O" or an empty string. Your function should check to see if
// any row, column, or either diagonal has three matching "X" or "O" symbols (non-empty strings)
// three-in-a-line. Your function should return either true or false to indicate
// someone won the game.
//
// Instead of trying to write crazy for loops to automate checking the rows, columns and diagonals
// consider writing one helper function that accepts three coordinate pairs and checks the values
// of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).
// Writing that helpCheck function to check evey possible win line is way easier than writing for loops!
// ------------------------------------------------------------------------------------------------

let helpCheck = rowOrCol => {
  let winner;
  for(let i = 0; i < rowOrCol.length - 1; i++) {
    if(rowOrCol[i] === rowOrCol[i + 1]) {
      winner = true;
    } else {
      winner = false;
    }
  }
  return winner;
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Write a function called minesweeper that accepts a 2D array representing a game of minesweeper.
// Each cell contains only either `null` or the string "*" to represent a bomb. Your function should
// return a 2D array where each cell is a number that says how many bombs that cells is touching.
// Cells that do not touch any bomb should contain a zero. Cells that contain a bomb themselves
// should contain a 9.
//
// Consider writing a helper function getCellValue(arr, row, col) that returns either the value at the
// cell or `null` if the value is out of the bounds of the array (going off the top, bottom, left or right).
// This helper function allows you easier iterate through the 2D array checking surrounding cells from
// one cell location without worrying about accessing things outside of the array.
// ------------------------------------------------------------------------------------------------

let minefield = [
  [ null, null, null, null, '*' ],
  [ null, null, null, null, '*' ],
  [ '*', null, null, null, null ],
  [ null, null, null, '*', null ],
  [ null, '*', null, null, null ]
];

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest two-d-array.solution.test
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should return the number 14', () => {
    expect(findFourteen(nestedArray)).toStrictEqual(14);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the number 24', () => {
    expect(howManyTreats(errands)).toStrictEqual(24);
  });
});

describe('Testing challenge 3', () => {
  test('It should return the product of all numbers in the nested arrays', () => {
    let firstInput = [[1,2], [3,4], [5,6]];
    let secondInput = [[14,8], [8, 1, 3], [5]];

    expect(calculateProduct(firstInput)).toStrictEqual(720);
    expect(calculateProduct(secondInput)).toStrictEqual(13440);
  });
});

describe('Testing challenge 4', () => {
  test('It should return the average temperature in the data set', () => {
    expect(averageDailyTemperature(weeklyTemperatures)).toStrictEqual(1687);
  });
});

describe('Testing challenge 5', () => {
  test('It should return the lowest temperature in the data set', () => {
    expect(lowestWeeklyAverage(weeklyTemperatures)).toStrictEqual(51);
  });
});

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
