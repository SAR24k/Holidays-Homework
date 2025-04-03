/*
12. Write a function to get the largest even number from an array of integers.
Example ===> [20, 40, 200, 301] = 200
*/

function largestEven(integerArr) {
  let largestEven = integerArr[0];
  for (const i of integerArr) {
    if (i % 2 === 0) {
      if (largestEven < i) {
        largestEven = i;
      }
    }
  }
  return largestEven;
}

const result = largestEven([20, 40, 200, 301]);

console.log(result);
