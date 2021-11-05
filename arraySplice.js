// Array.prototype.splice()

const numbers = [1, 2, 3, 4, 5];

// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.

const spliceResult = numbers.splice(1, 2, 6, 7); // at index 1 of numbers array, add new items and remove 2 item
const spliceResult1 = numbers.splice(-1, 2, 6, 7, 8, 9, 10);

console.log(numbers);
console.log(spliceResult1);

// Replace specific item in an array using splice method
/*
- when we need to replace specific items in an array, array.splice() method do a great job here. This method takes 3 parameters .splice(startIndex, deleteCount, ...items).
	startIndex: define where to start replacing
    deleteCount: how many items to delete
    ...items: new items to add on top of the removed items
*/

const months = ['june', 'july', 'march', 'april', 'may'];

months.splice(0, 2, 'january', 'february');

console.log(months) // ['january', 'february', 'march', 'april', 'may'];
