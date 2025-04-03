/*
13. Write a function to check whether a given number is in a given range.
Example ===> 
(1,2,4) => 2 is between 1 and 4 ===> return ==> true
(1,2,-3) = 2 is not between 1 and -3 ===> return ==> false
*/

function isInRange(start, number, end) {
  for (let i = start; i <= end; i++) {
    if (i === number) {
      return true;
    }
  }
  return false;
}

let result = isInRange(1, 2, -3);

console.log(result);
