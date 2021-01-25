// Array.prototype.splice()

const numbers = [1, 2, 3, 4, 5];

// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.

const spliceResult = numbers.splice(1, 2, 6, 7); // at index 1 of numbers array, add new items and remove 2 item
const spliceResult1 = numbers.splice(-1, 2, 6, 7, 8, 9, 10);

console.log(numbers);
console.log(spliceResult1);
