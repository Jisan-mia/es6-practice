// important object methods

let x = 4;
let y = 5;
let z = x * y;

const studentObj = {
	name: "Jisan",
	id: 1,
	age: 18,
	frndName: "Shawon",
	x,
	y,
	z,
};

const keys = Object.keys(studentObj);
const values = Object.values(studentObj);
const entries = Object.entries(studentObj);

// console.log(keys);
// console.log(values);
console.log(entries);
