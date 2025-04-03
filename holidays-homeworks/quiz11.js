/*
11. Write a function to find the number of even digits in a given integer.
Example ===> 450 = 2
Example ===> 125 = 1
*/
function countEvenDigits(number) {
  number = String(number);
  let c = 0;
  
  for (let i = 0; i < number.length; i++) {
      if (Number(number[i]) % 2 === 0) {c++;}
  }
  
  return c;
}
console.log(countEvenDigits(888));
console.log(countEvenDigits(13579));
