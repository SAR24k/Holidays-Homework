/*
8. Write a function to check whether all the digits in a given number are the same or not.
Example ===>
12346 = false
1111 = true
*/
function allDigitsSame(number) {
    let numStr = number.toString();
    
    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] !== numStr[0]) {return false;}
    }
    
    return true;
}
console.log(allDigitsSame(555));
console.log(allDigitsSame(9876));
