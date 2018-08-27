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

let lowestWeeklyTemperature = [
  [66, 64, 58, 65, 71, 57, 60],
  [40, 40, 40, 40, 40, 40, 40],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57]
];

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
// Write a function named something that, ....
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
// Run your tests from the console: jest two-d-array.test
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
