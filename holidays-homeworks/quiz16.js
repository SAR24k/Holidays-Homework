/*
16. Write a function that takes two arguments, then puts the multiples of the first number up to the second number in an array.
Example ===> (2, 11) = [2, 4, 6, 8, 10]
Example ===> (3, 16) = [3, 6, 9, 12, 15]
*/

function creatingArray(start, end) {
  let array = [];
  for (let i = start; i <= end; i += start) {
    array.push(i);
  }
  return array;
}

const result = creatingArray(3, 16);

console.log(result);
