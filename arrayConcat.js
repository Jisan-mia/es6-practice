//Array.prototype.concat()

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];
const numbers3 = [11, 12, 13, 14, 15];

//concat methods combines two or more arrays at the end of the first array
// it does not change the main array or any individual array
const concatTwoArr = numbers1.concat(numbers2, numbers3);

console.log(numbers1);
console.log(concatTwoArr);
