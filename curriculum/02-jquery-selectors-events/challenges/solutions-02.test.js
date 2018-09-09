'use strict';

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest challenges-02.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should add the hourly totals array', () => {
    expect(grandTotal(cookieStores)).toStrictEqual([ 88, 153, 252, 286, 139, 161, 145, 232, 276, 207, 161, 169 ]);
  });
});

describe('Testing challenge 2', () => {
  test('It should create an object of data for each store', () => {
    expect(salesData(hoursOpen, grandTotal(cookieStores))).toStrictEqual([
      { sales: '88 cookies', time: '9 a.m.' },
      { sales: '153 cookies', time: '10 a.m.' },
      { sales: '252 cookies', time: '11 a.m.' },
      { sales: '286 cookies', time: '12 p.m.' },
      { sales: '139 cookies', time: '1 p.m.' },
      { sales: '161 cookies', time: '2 p.m.' },
      { sales: '145 cookies', time: '3 p.m.' },
      { sales: '232 cookies', time: '4 p.m.' },
      { sales: '276 cookies', time: '5 p.m.' },
      { sales: '207 cookies', time: '6 p.m.' },
      { sales: '161 cookies', time: '7 p.m.' },
      { sales: '169 cookies', time: '8 p.m.' }
    ]);

    expect(salesData(hoursOpen, grandTotal(cookieStores)).length).toStrictEqual(hoursOpen.length);
  });
});

describe('Testing challenge 3', () => {
  test('It should return a list of valentine exchanges', () => {
    expect(giveValentines(['Jerry', 'George', 'Elaine', 'Kramer', 'Newman'])).toStrictEqual([
      'Jerry gives a Valentine to George.',
      'Jerry gives a Valentine to Elaine.',
      'Jerry gives a Valentine to Kramer.',
      'Jerry gives a Valentine to Newman.',
      'George gives a Valentine to Jerry.',
      'George gives a Valentine to Elaine.',
      'George gives a Valentine to Kramer.',
      'George gives a Valentine to Newman.',
      'Elaine gives a Valentine to Jerry.',
      'Elaine gives a Valentine to George.',
      'Elaine gives a Valentine to Kramer.',
      'Elaine gives a Valentine to Newman.',
      'Kramer gives a Valentine to Jerry.',
      'Kramer gives a Valentine to George.',
      'Kramer gives a Valentine to Elaine.',
      'Kramer gives a Valentine to Newman.',
      'Newman gives a Valentine to Jerry.',
      'Newman gives a Valentine to George.',
      'Newman gives a Valentine to Elaine.',
      'Newman gives a Valentine to Kramer.'
    ]);
  });
});
