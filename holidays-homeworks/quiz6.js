/*
6. Write a function to compute the sum of all the digits that occur in a given string.
Example ===> abcd21hd8kl7 
2 + 1 + 8 + 7 = 18
*/
function sumOfDigits(str) {
    let sum = 0;
    
    for (let char of str) {
        if (!isNaN(char) && char !== " ") {sum += Number(char);}
    }
    return sum;
}

console.log(sumOfDigits("abc123xyz"));
console.log(sumOfDigits("no digits"));
