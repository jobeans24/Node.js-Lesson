// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// The spread operator is being used here.
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// The newSongs array will be logged in the console.
// The newSongs array will contain the same elements as the songs array.
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
  return array.reduce((a, b) => a + b, 0); 
};
// TODO: What do you expect to be logged in the console?
// The sum of the numbers 1, 2, and 3 will be logged in the console.
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// The rest operator is being used as the parameter.
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
// The sum of the numbers 1, 2, and 3 will be logged in the console.
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// The sum of the numbers 1, 2, 3, 4, and 100 will be logged in the console.
console.log(additionSpread(1, 2, 3, 4, 100));
