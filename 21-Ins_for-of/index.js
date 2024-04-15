// 1. Using arrays
const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];

for (const song of songs) {
  console.log(song);
}

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

console.log('\n================================================\n');

// 2. Using multidimensional arrays
// the is the array of arrays
// every element is an array with two elements
const moreSongs = [
  ['Bad Guy', 1],
  ['The Wheels on the Bus', 2], 
  ['Friday', 3],
];

// for of loop
// every element will be 
for (const song of moreSongs) {
  console.log(`${song[0]}'s chart position is ${song[1]}`);
}

// matrix traversal -> array of arrays

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/

// iteration 1: song = ['Bad Guy', 1] = song[0] = 'Bad Guy', song[1] = 1
// iteration 2: song = ['The Wheels on the Bus', 2] = song[0] = 'The Wheels on the Bus', song[1] = 2
// iteration 3: song = ['Friday', 3] = song[0] = 'Friday', song[1] = 3