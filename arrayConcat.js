// Array.prototype.concat()
/*
- Array concat method combines two or more arrays at the end of the first array
- it does not change the main array or any individual array
*/
const numbers1 = [1, 2];
const numbers2 = [3, 4];
const numbers3 = [5, 6, 7];

const concatTwoArr = numbers1.concat(numbers2, numbers3);

console.log(numbers1); // [1, 2]
console.log(concatTwoArr); // [1, 2, 3, 4, 5, 6, 7]
