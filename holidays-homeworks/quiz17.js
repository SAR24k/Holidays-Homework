/*
17. Write a function to test whether an array of integers of length 2 does not contain 4 or 6.
Example ===>
[3, 2] = true
[6, 1] = false
*/

function isContain4Or6(arr) {
  return arr.includes(4) ? false : arr.includes(6) ? false : true;
}

const result = isContain4Or6([1, 6]);

console.log(result);
