const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
// tripledArray is equal to a new array of numbers multiplied by 3 and returned by map(). map() will use an arrow function as a condition.
const tripledArray = originalArray.map(data => data * 3);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
// oddOrEven is equal to a new array of strings that will either be 'even' or 'odd' based on the number in originalArray
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});
