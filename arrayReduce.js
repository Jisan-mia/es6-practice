//Array.prototype.reduce()

const numbers = [1, 2, 3, 4, 5, 6];

//reduce method reduces the array to a single value
// this method does not change the original array

const sum = numbers.reduce((prevValue, currentValue) => {
	return prevValue + currentValue;
}, 0);

console.log(sum);

const numbers1 = [15.5, 2.3, 1.1, 4.7, 10.5];
const total = numbers1.reduce((total, num) => total + Math.round(num), 0);
console.log(total);
