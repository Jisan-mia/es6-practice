//spread operator
const number1 = [1, 2, 3, 4];
const number2 = [5, 6, 7, 8];

const x = [...number1]; //exact copy of number1

const concatNumbers = [...number1, ...number2];

const newNumbers = [...number1, 5, 6, 7, 8, 9, 10];
// console.log(newNumbers);

//object spreading
const myObj1 = {
	x: 1,
	y: 2,
};

const myObj2 = {
	a: 1,
	b: 2,
};

console.log({ ...myObj1, ...myObj2 });
