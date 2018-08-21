![CF](https://i.imgur.com/7v5ASc8.png)  Nested For Loops
=======
## Overview
We can use nested for loops to iterate over each element in another array.

For example, say you had a group of people, and you wanted to everyone to take turns shaking everyone's hand (other than themselves, of course). 

Visualize 4 people sitting in a row.  The first person stands up, walks in front and shakes each of the other's hands, and then sits down at the end of the row. Then the next person gets up and does the same thing ... until everyone has gone through the process ...

```

let shakeHands = list => {
  for( let i = 0; i <= list.length - 1; i++ ) {
    for( let j = 0; j <= list.length - 1; j++ ) {
      if(list[i] === list[j]) { continue; }
      console.log(`${list[i]} shakes ${list[j]}'s hand.`);
    }
  }
};

let people = ['Kookla', 'Fran', 'Ollie'];

shakeHands(people);

// Output:
Kookla shakes Fran's hand
Kookla shakes Ollie's hand
Fran shakes Kookla's hand
Fran shakes Ollie's hand
Ollie shakes Kookla's hand
Ollie shakes Fran's hand

```

Alternatively, you can have 2 different arrays that loop over each other. Here, we'll create a simple grid, like a tic-tac-toe board.  First we'll iterate over the 'height' which creates the rows, and then over the 'width', to create the columns.  

```
let drawGrid = (height,width) => {
  for(let i = 1; i <= height; i++) {
    let row = [];
    let char = i === height ? ' ' : '_'; // On the bottom row, we need to use spaces instead of "_"
    for(let j = 1; j <= width; j++) {
      row.push(char);
    }
    console.log(row.join('|'));
  }
};
drawGrid(3,,3)

// Output:

_|_|_
_|_|_
 | | 

```

### Caveats and Notes
- Looping an array over itself like the first example can lead to massive performance problems!
- Make sure that in your nested loops that you use unique and meaningful variable names.
