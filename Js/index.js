// 1. JavaScript Logic & Data Manipulation 
// Question: 
// You are given an array of numbers. Write a JavaScript function that returns a new array 
// containing only the even numbers. 
// function filterEvenNumbers(arr) { 
// // Your code here 
// } 
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Expected output: [2, 4, 6]

function filterEvenNumbers(arr) {
    return arr.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));