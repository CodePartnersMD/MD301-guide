'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
// 
// Write a function named howMuchPencil that takes in a string, as written on the side of a pencil.
// As you sharpen the pencil, the string will become shorter and shorter.
// 
// Your function should use slice within a loop and return an array of each successive string
// result from losing letters to the sharpener, until nothing is left.
//
// For example, if the input is 'Welcome', the output will be:
// ['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', ''].
// ------------------------------------------------------------------------------------------------

const howMuchPencil = name => {
  //<solution>
  let result = [];    
  for (let i = 0; i < name.length + 1; i++) {
    result.push(name.slice(i));
  }
  return result;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function that, given a string as input, returns an array where every element is a
// character of the input string.
//
// For example, stringToArray('gregor') returns ['g','r','e','g','o','r',].
// ------------------------------------------------------------------------------------------------

const stringToArray = (input) => {
  //<solution>
  return input.split('');
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named totalSumCSV that, given a string of comma-separated values (CSV) as input 
// (e.g. 1, 2, 3), returns the total sum of the numeric values.
// ------------------------------------------------------------------------------------------------

const totalSumCSV = (input) => {
  //<solution>
  const values = input.split(',');
  let total = 0;
  values.forEach(value => {
    const numericValue = Number.parseInt(value);
    if (!Number.isNaN(numericValue)){
      total += numericValue;
    }
  });
  return total;
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
// 
// You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below.
// Rather than taking the entire recipe, you only want a list of the item names.
//
// Write a function named listFoods that takes in the recipe and returns an array of the food items
// without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.
// 
// Use slice for this function, maybe more than once. The Array.indexOf() method may also be helpful. 
// ------------------------------------------------------------------------------------------------

const gruffaloCrumble = {
  name: 'How to make a Gruffalo Crumble',
  ingredients: [
    '1 medium-sized Gruffalo',
    '8 pounds oats',
    '2 pounds brown sugar',
    '4 pounds flour',
    '2 gallons pure maple syrup',
    '16 cups chopped nuts',
    '1 pound baking soda',
    '1 pound baking powder',
    '1 pound cinnamon',
    '6 gallons melted butter',
    '2 gallons fresh water',
  ],
  steps: [
    'Pre-heat a large oven to 375',
    'De-prickle the gruffalo',
    'Sprinkle with cinnamon, sugar, flour, and nuts',
    'Mix until evenly distributed',
    'Grease a 3-foot x 3-foot casserole dish',
    'Combine gruffalo compote with water to maintain moisture in the oven',
    'Fold together remaining ingredients to make the crisp',
    'Spread the crisp evenly over the gruffalo mixture',
    'Bake for 12-15 hours',
  ]
}


const listFoods = (recipe) => {
  //<solution>
  let result = [];
  recipe.ingredients.forEach(ingredient => {
    let withoutAmount = ingredient.slice(ingredient.indexOf(' ') + 1);
    let withoutUnits = withoutAmount.slice(withoutAmount.indexOf(' ') + 1);
    result.push(withoutUnits);
  })
  return result;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
// 
// Use the same recipe from challenge 4, above.
//
// Write a function named stepAction that takes in the recipe and extracts the action verbs from the steps.
// Return an array containing just the verbs. For example, 'Mix until evenly distributed' returns 'Mix'.
//
// Use the split method for this function.
// ------------------------------------------------------------------------------------------------

const stepActions = (recipe) => {
  //<solution>
  let result = [];
  recipe.steps.forEach(step => {
    result.push(step.split(' ')[0]);
  })
  return result;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
// 
// Write a function named splitFoods that uses split to produce the same output as challenge 4.
// ------------------------------------------------------------------------------------------------

const splitFoods = (recipe) => {
  //<solution>
  let result = [];
  recipe.ingredients.forEach(ingredient => {
    result.push(ingredient.split(' ').slice(2).join(' '));
  })
  return result;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Write a function named removeEvenValues that, given an array of integers as input,
// uses splice, slice, split, or join to remove the array's even values.
// ------------------------------------------------------------------------------------------------

const removeEvenValues = (input) => {
  //<solution>
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      input.splice(i, 1);
      i -= 1;
    }
  }
  return input;
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 8
//
// Write a function named removeLastCharacters that takes in a string and a number.
// This function should remove a certain number of characters from the end of the string.
// The number argument determines how many characters to remove. Return the resulting string.
//
// If the number argument is greater than the length of the input string the function should 
// return an empty string. If the number argument input is a negative number, 
// the function should return the input string without any changes.
//
// For example: removeLastCharacters(2, 'Gregor') returns 'Greg'.
// ------------------------------------------------------------------------------------------------

const removeLastCharacters = (numberOfCharacters, input) => {
  //<solution>
  if (numberOfCharacters > input.length) {
    return '';
  }

  if (numberOfCharacters < 0) {
    return input;
  }

  return input.split('').slice(0, input.length - numberOfCharacters).join('');
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 9
//
// Write a function named removeVowels that takes in a string and returns a new string
// where all the vowels of the original string have been removed.
//
// For example, removeVowels('gregor') returns 'grgr'.
// ------------------------------------------------------------------------------------------------

const removeVowels = (input) => {
  //<solution>
  const vowelRegex = /[aeiou]/;
  const characters = input.split('');
  for (let i = 0; i < characters.length; i++) {
    if (vowelRegex.test(characters[i])) {
      characters.splice(i, 1);
      i -= 1;
    }
  }

  return characters.join('');
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest challenges-05.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should return a list of shortening words', () => {
    expect(howMuchPencil('Welcome')).toStrictEqual(['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']);
    expect(howMuchPencil('Welcome').length).toStrictEqual(8);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array of individual letters', () => {
    expect(stringToArray('Gregor')).toStrictEqual(['G','r','e','g','o','r']);
    expect(stringToArray('Gregor').length).toStrictEqual(6);
  });
});

describe('Testing challenge 3', () => {
  test('It should add up the numbers contained within the string', () => {
    expect(totalSumCSV('1, 4, 5, 7, 2')).toStrictEqual(19);
  });
});

describe('Testing challenge 4', () => {
  test('It should return a list of foods', () => {
    expect(listFoods(gruffaloCrumble)).toStrictEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']);
    expect(listFoods(gruffaloCrumble).length).toStrictEqual(11);
  });
});

describe('Testing challenge 5', () => {
  test('It should return a list of recipe steps', () => {
    expect(stepActions(gruffaloCrumble)).toStrictEqual(['Pre-heat', 'De-prickle', 'Sprinkle', 'Mix', 'Grease', 'Combine', 'Fold', 'Spread', 'Bake']);
    expect(stepActions(gruffaloCrumble).length).toStrictEqual(9);
  });
});

describe('Testing challenge 6', () => {
  test('It should return a list of foods', () => {
    expect(splitFoods(gruffaloCrumble)).toStrictEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']);
  });
});

describe('Testing challenge 7', () => {
  test('It should remove the even numbers from the array', () => {
    expect(removeEvenValues([6, 3, 19, 43, 12, 66, 43])).toStrictEqual([ 3, 19, 43, 43 ]);
    expect(removeEvenValues([6, 3, 19, 43, 12, 66, 43]).length).toStrictEqual(4);
  });
});

describe('Testing challenge 8', () => {
  test('It should shorten the string based on the first argument', () => {
    expect(removeLastCharacters(2, 'Gregor')).toStrictEqual('Greg');
    expect(removeLastCharacters(2, 'Gregor').length).toStrictEqual(4);
  });
});

describe('Testing challenge 9', () => {
  test('It should return the string without vowels', () => {
    expect(removeVowels('gregor')).toStrictEqual('grgr');
    expect(removeVowels('gregor').length).toStrictEqual(4);
  });
});
