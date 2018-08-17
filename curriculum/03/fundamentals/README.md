![CF](https://i.imgur.com/7v5ASc8.png)  2 Dimensional Arrays
=======
## Overview
A 2 Dimensional array is simply an array whose elements are also arrays. 

```
let a = [ [2,4,6,8], [1,3,7,9], [4,3,8,6] ];

// Many people visualize this as a grid ...

let a = [
  [2,4,6,8],
  [1,3,7,9],
  [4,3,8,6]
];
```

Lets loop over that and print out the grid ... the outer loop represents the elements in the array `a`, while the inner loop represents each item in the array found at each position in `a`
```
let drawTable = (table) => {
  for(let i = 0; i <= table.length - 1; i++) {
    let line = '';
    for(let j = 0; j <= table[i].length - 1; j++){
      line = line + table[i][j];
    }
    console.log(line);
  }
};
drawTable(a);

// Output: 

  2468
  1379
  4386
```

In this example, we'll try and figure out which items in the arrays "touch" each other.  Look at the output from the previous example, and think about which numbers touch which each other (vertically, horizontally, and diagonally) when you visualize it as that grid.  By analyzing which are one above or below and one left or right, we can 'easily' loop through and figure this out.

```
let touches = (table) => {
  for(let i = 0; i <= table.length - 1; i++) {
    for(let j = 0; j <= table[i].length - 1; j++){
      let touches = [];
      for(let x = i - 1; x <= i + 1; x++) {
        for(let z = j - 1; z <= j + 1; z++) {
          if(x === i && j === z) {continue;} // skip ourself
          table[x] && table[x][z] && touches.push(table[x][z]);
        }
      }
      console.log(`${table[i][j]} touches ${touches}`);
    }
  }
};

touches(a);

// OUTPUT:

    2 touches 4,1,3
    4 touches 2,6,1,3,7
    6 touches 4,8,3,7,9
    8 touches 6,7,9
    1 touches 2,4,3,4,3
    3 touches 2,4,6,1,7,4,3,8
    7 touches 4,6,8,3,9,3,8,6
    9 touches 6,8,7,8,6
    4 touches 1,3,3
    3 touches 1,3,7,4,8
    8 touches 3,7,9,3,6
    6 touches 7,9,8

```
