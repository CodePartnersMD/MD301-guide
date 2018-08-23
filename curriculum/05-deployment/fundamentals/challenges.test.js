'use strict';

//Slice, Splice, Split, Join:



// ------------------------------------------------------------------------------------------------
// CHALLENGE 1: Whittled down to nothing
// 
// The more you use a wooden pencil, the more it needs to be sharpened.
// 
// The more it's sharpened, the shorter it gets! That means the text printed
// on the side gets slowly eaten away, as you whittle it down to a stub. 
// 
// Complete the function named 'howMuchPencil', that shows what happens to the text.  
//   input: The text on the side of the pencil. 
//   output: an array of each successive "word" resulting from losing letters to the sharpener, until nothing is left 
// 
// Requirements: Use slice, inside a loop of some kind. 
// ------------------------------------------------------------------------------------------------

const howMuchPencil = name => {
  // Solution code here...
}

// EXAMPLE:
const pencilName = 'TICONDEROGA';
//console.log(howMuchPencil(pencilName));
//[ 'TICONDEROGA',
//  'ICONDEROGA',
//  'CONDEROGA',
//  'ONDEROGA',
//  'NDEROGA',
//  'DEROGA',
//  'EROGA',
//  'ROGA',
//  'OGA',
//  'GA',
//  'A',
//  '' ]

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2: Shopping to bake a Gruffalo Crumble
// 
// It's time to get to work in the kitchen! We are going to bake a Gruffalo Crumble. 
// But first, we need to go shopping. What items do we need from the store? 
// 
// Rather than staring at the whole recipe, wouldn't it be nice to have a simple list of the food items
// that the recipe requires? Let's write code that will work on any similarly-formatted recipe!
// 
// Ingredient rows will always have a quantity, an amount, and a food, seperated by spaces. 
//
// Complete the function named 'listFoods', that extracts just the food names from this standardized recipe format.  
//   input: A recipe object, that has an ingredients property, that holds an array of what goes in. 
//   output: An array of all the food items, without any amounts or units, we need for the recipe. 
// 
// Requirements: Use slice. Twice is nice. The Array#indexOf method can help you find where to chop. 
// ------------------------------------------------------------------------------------------------


const listFoods = recipe => {
  // Solution code here...
}

// EXAMPLE: 
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
//console.log(listFoods(gruffaloCrumble));
//['Gruffalo',
//  'oats',
//  'brown sugar',
//  'flour',
//  'pure maple syrup',
//  'chopped nuts',
//  'baking soda',
//  'baking powder',
//  'cinnamon',
//  'melted butter',
//  'fresh water']


// ------------------------------------------------------------------------------------------------
// CHALLENGE 3: Do the Splits. 
// 
// Look at that list of steps... Each one starts with an action verb. 
// Let's extract them and list them all out.
// 
// The String#split method will break up a string into an array. 
// 
// Use that to grab the action words from the same recipe format as above. 
//
// Complete the function named 'stepActions', that extracts just the action verbs from this standardized recipe format.  
//   input: A recipe object, with a steps property, where each step starts with a verb.
//   output: An array of all the verbs required in the given recipe. 
// 
// Requirements: Use String#split. 
// ------------------------------------------------------------------------------------------------

const stepActions = recipe => {
  // Solution code here...
}

// EXAMPLE:
// console.log(stepActions(gruffaloCrumble))
//['Pre-heat',
//  'De-prickle',
//  'Sprinkle',
//  'Mix',
//  'Grease',
//  'Combine',
//  'Fold',
//  'Spread',
//  'Bake']

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4: Do the Split-Join mashup. 
// 
// Now that we know how to split, let's do Challenge 2 again, a different way.  
// 
// The String#split method will break up a string into an array. The Array#slice method will let you 
// copy out a range of elements from your new array. Combine them back into a nice string with Array#join. 
// 
// Use that to break up each ingredient row from the same recipe format as above. 
//
// Complete the function named 'splitFoods', that extracts just the food names from this standardized recipe format.  
//   input: Same as Challenge 2.
//   output: Same as Challenge 2. 
// 
// Requirements: Use String#split, Array#slice, and Array#join.
// ------------------------------------------------------------------------------------------------

const splitFoods = recipe => {
  // Solution code here...
}

// EXAMPLE:
// console.log(splitFoods(gruffaloCrumble));
//['Gruffalo',
//  'oats',
//  'brown sugar',
//  'flour',
//  'pure maple syrup',
//  'chopped nuts',
//  'baking soda',
//  'baking powder',
//  'cinnamon',
//  'melted butter',
//  'fresh water']




// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest slice-splice-split-join.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Code Challenge 1', () => {
  test('It should return a list of shortening words', () => {
    expect(howMuchPencil(pencilName)).toStrictEqual(["TICONDEROGA", "ICONDEROGA", "CONDEROGA", "ONDEROGA", "NDEROGA", "DEROGA", "EROGA", "ROGA", "OGA", "GA", "A", ""]);
  });
});

describe('Code Challenge 1', () => {
  test('It should have more tests...', () => {
    expect(true).toBeTruthy();
  });
});

describe('Code Challenge 2', () => {
  test('It should return a list of foods', () => {
    expect(listFoods(gruffaloCrumble)).toStrictEqual(["Gruffalo", "oats", "brown sugar", "flour", "pure maple syrup", "chopped nuts", "baking soda", "baking powder", "cinnamon", "melted butter", "fresh water"]);
  });
});

describe('Code Challenge 2', () => {
  test('It should have more tests...', () => {
    expect(true).toBeTruthy();
  });
});

describe('Code Challenge 3', () => {
  test('It should have more tests...', () => {
    expect(stepActions(gruffaloCrumble)).toStrictEqual(["Pre-heat", "De-prickle", "Sprinkle", "Mix", "Grease", "Combine", "Fold", "Spread", "Bake"]);
  });
});

describe('Code Challenge 3', () => {
  test('It should have more tests...', () => {
    expect(true).toBeTruthy();
  });
});

describe('Code Challenge 4', () => {
  test('It should return a list of foods', () => {
    expect(splitFoods(gruffaloCrumble)).toStrictEqual(["Gruffalo", "oats", "brown sugar", "flour", "pure maple syrup", "chopped nuts", "baking soda", "baking powder", "cinnamon", "melted butter", "fresh water"]);
  });
});

describe('Code Challenge 4', () => {
  test('It should have more tests...', () => {
    expect(true).toBeTruthy();
  });
});
