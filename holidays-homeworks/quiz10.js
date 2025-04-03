/*
10. Write a function to remove all characters from a given string that appear more than once.
Example ===> "abcdabc" = d
*/
function remove(str) {
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.split(char).length === 2) {result += char;}
    }
    
    return result;
}

console.log(remove("hello"));
console.log(remove("aaa"));

