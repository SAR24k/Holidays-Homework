/* 
5. Define a function that takes an array of numbers as its parameter. The function returns an array that contains array's length, the smallest element, the largest element, and the average of all elements.
*/
function cArray(arr) {
    let length = arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let average = arr.reduce((sum, num) => sum + num, 0) / length;

    return [length, min, max, average];
}
console.log(ceArray([4, 7, 1, 9, 3])); 

