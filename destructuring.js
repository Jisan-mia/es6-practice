//destructuring in js
const user = {
	id: 43,
	name: "Jisan",
	age: 18,
	education: {
		degree: "Diploma",
		duration: "4 year",
	},
};

const { name, education: { degree, duration } = {} } = user;

console.log(degree, duration);

//array destructuring
const numbers = [1, 2, [3, 100, 200], 4, 5];

const [, , [, a, b]] = numbers;
console.log(a, b);

// swap 2 variable using destructuring
let x = 5;
let y = 10;

[y, x] = [x, y];

console.log(x, y);
