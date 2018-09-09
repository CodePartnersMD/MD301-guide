'use strict';


// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function that appends " The end." to a string, and returns it. The original source
// string should not be modified. 
//
// ------------------------------------------------------------------------------------------------

const appendTheEnd = (str) => {
  //<solution>
  str = str + " The end."
  //</solution
  return str;
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function that accepts an array, and adds on the first element to the end. 
// The change should be reflected in the source array, that was passed in to the function.
// That is, the function should modify the array "in place";
//
// Do not use a return statement. 
//
// For example: 
// let a = [1, 2, 3];
// appendFirstToLast(a);
// console.log(a) // [1, 2, 3, 1].
// ------------------------------------------------------------------------------------------------

const appendFirstToLast = (list) => {
  //<solution>
  list.push(list[0]);
  //</solution
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function that accepts an object and an integer, and adds a new property: yearBorn (set to the int). 
// The change should be reflected in the source object, that was passed in to the function.
// That is, the function should modify the object "in place";
//
// Do not use a return statement. 
//
// For example: 
// let octavia = { fullName: "Octavia Estelle Butler" };
// addBirthYearProperty(octavia);
// console.log(a) // [1, 2, 3, 1].
// ------------------------------------------------------------------------------------------------

const addBirthYearProperty = (obj, year) => {
  //<solution>
  obj.yearBorn = year;
  //</solution
}


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
  test('It should append without modifying the oiginal', () => {
    const a = "This is my story.";
    const b = appendTheEnd(a);

    expect(a).toStrictEqual("This is my story.");
    expect(b).toStrictEqual("This is my story. The end.");
  });
});

describe('Testing challenge 2', () => {
  test('It should append by modifying the oiginal', () => {
    const a = ["Yes", "it", "is"];
    appendFirstToLast(a);

    expect(a).toStrictEqual(["Yes", "it", "is", "Yes"]);
  });
});

describe('Testing challenge 3', () => {
  test('It should add a property to an object', () => {
    const a = { fullName: "Octavia Butler" };
    addBirthYearProperty(a, 1947);

    expect(a.yearBorn).toStrictEqual(1947);
  });
});
