/*
2. Write a function that converts a 2D array into a 1D array.
Example ===> [[1, 2, 3], [4, 5, 6], [7, 8, 9]] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
// with .map()
function flattenArray(arr) {
    let result = [];

    arr.map(subArray => subArray.map(num => result.push(num)));

    return result;
}

console.log(flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); 
