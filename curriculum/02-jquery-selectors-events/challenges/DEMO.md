```javascript
// Everybody Greets Everybody ...
let people = ['John', 'Cathy', 'Zach', 'Allie'];

// In this function, we loop over the people and then for each person, we loop over the same list of people. In this "inner loop", the person in the outer loop can "see" each person, including themselves. So we skip our own entry and then shake everyone's hand.

let shakeHands = list => {
  for( let i = 0; i <= list.length - 1; i++ ) {
    for( let j = 0; j <= list.length - 1; j++ ) {
      if(list[i] === list[j]) { continue; }
      console.log(`${list[i]} shakes ${list[j]}'s hand.`);
    }
  }
};

shakeHands(people);

// Tic Tac Toe Grid
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
drawGrid(7,7);
```
