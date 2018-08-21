'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// You friend Pat has a chain of stores around the greater Seattle area. He specializes in selling salmon cookies. Pat has data for the hourly sales of cookies per hour for each store. He wants to create an array of the total number of cookies sold per hour for all of his stores combined.
//
// Write a nested for loop that adds up the cookies sales for each hour of operation for all of the stores combined. The first element in the hourlySales array should be the sum of the cookies sold in the 9:00 hour at all five stores combined. For this example, the total at 9:00 is 17 + 26 + 7 + 5 + 33, or 88 total cookies.
// ------------------------------------------------------------------------------------------------

let hourlySales = [];
let hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 a.m.', '1 a.m.', '2 a.m.', '3 a.m.', '4 a.m.', '5 a.m.', '6 a.m.', '7 a.m.', '8 a.m.'];

let firstPike = [ 17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18 ];
let seaTac = [ 26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43 ];
let seattleCenter = [ 7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29 ];
let capHill = [ 5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62 ];
let alkiBeach = [ 33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17 ];

let stores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

for(let i = 0; i < hoursOpen.length; i++) {
  let hourlyTotal = 0;
  for(let j = 0; j < stores.length; j++) {
    hourlyTotal += stores[j][i];
  }
  hourlySales.push(hourlyTotal);
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Pat has decided that he would also like to organize his data as objects containing the number of cookies sold per hour and the time. Here is sample data for the 9:00 sales: { sales: '88 cookies', time: '9 a.m.' }.
//
// Use forEach to iterate over the hourlySales array and create an object for each hour. Push each object into the salesOverview array.
// ------------------------------------------------------------------------------------------------

let salesOverview = [];

hourlySales.forEach((total, idx) => {
  salesOverview.push( {
    sales: `${total} cookies`,
    time: hoursOpen[idx]
  } )
})

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named shakeHands that takes in an array. The function should iterate over the array and ensure that each person shakes hands with every other person in the array. However, they should not shake hands with themselves!
//
// Use a nested for loop to create a message for each handshake and push it into the greetings array. The message should follow this format: 'John shakes Vinicio's hand.'. Use template literals, no string concatenation. 
// ------------------------------------------------------------------------------------------------

let people = ['John', 'Vinicio', 'Sam', 'Allie', 'Demi'];

let greetings = [];

let shakeHands = list => {
  for( let i = 0; i <= list.length - 1; i++ ) {
    for( let j = 0; j <= list.length - 1; j++ ) {
      if(list[i] === list[j]) { continue; }
      greetings.push(`${list[i]} shakes ${list[j]}'s hand.`);
    }
  }
};

shakeHands(people);

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest nested.solution.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('The hourly totals should be added to the hourlySales array', () => {
    expect(hourlySales).toStrictEqual([ 88, 153, 252, 286, 139, 161, 145, 232, 276, 207, 161, 169 ]);
  });
});

describe('Testing challenge 2', () => {
  test('An object should be created for each store', () => {
    expect(salesOverview).toStrictEqual([ 
      { sales: '88 cookies', time: '9 a.m.' },
      { sales: '153 cookies', time: '10 a.m.' },
      { sales: '252 cookies', time: '11 a.m.' },
      { sales: '286 cookies', time: '12 a.m.' },
      { sales: '139 cookies', time: '1 a.m.' },
      { sales: '161 cookies', time: '2 a.m.' },
      { sales: '145 cookies', time: '3 a.m.' },
      { sales: '232 cookies', time: '4 a.m.' },
      { sales: '276 cookies', time: '5 a.m.' },
      { sales: '207 cookies', time: '6 a.m.' },
      { sales: '161 cookies', time: '7 a.m.' },
      { sales: '169 cookies', time: '8 a.m.' } 
    ]);
  });
});

describe('Testing challenge 3', () => {
  test('The list of greetings should be generated', () => {
    expect(greetings).toStrictEqual([
      'John shakes Vinicio\'s hand.',
      'John shakes Sam\'s hand.',
      'John shakes Allie\'s hand.',
      'John shakes Demi\'s hand.',
      'Vinicio shakes John\'s hand.',
      'Vinicio shakes Sam\'s hand.',
      'Vinicio shakes Allie\'s hand.',
      'Vinicio shakes Demi\'s hand.',
      'Sam shakes John\'s hand.',
      'Sam shakes Vinicio\'s hand.',
      'Sam shakes Allie\'s hand.',
      'Sam shakes Demi\'s hand.',
      'Allie shakes John\'s hand.',
      'Allie shakes Vinicio\'s hand.',
      'Allie shakes Sam\'s hand.',
      'Allie shakes Demi\'s hand.',
      'Demi shakes John\'s hand.',
      'Demi shakes Vinicio\'s hand.',
      'Demi shakes Sam\'s hand.',
      'Demi shakes Allie\'s hand.'
    ]);
  });
});
