/*
7. Write a function to find the number of common elements of both arrays.
Example ===> [1, 2, 3, 4], [1, 2, 3, 5] = 3
*/
function countCommonElements(arr1, arr2) {
    let count = 0;
    
    for (let num of arr2) {
        if (arr1.includes(num)) {count++;}
    }
    return count;
}


console.log(countCommonElements([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(countCommonElements([10, 20, 30], [5, 10, 15, 20]));
console.log(countCommonElements([7, 8, 9], [1, 2, 3]));
