/*
1.Write a function that returns the number of vowels in a string.
vowels => a e i o u
Example ===> "Hello" = 2
*/
function countVowels(word) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let char of word) {if (vowels.includes(char)) {count++;}}
    
    return count;
}

console.log(countVowels("hello"));
