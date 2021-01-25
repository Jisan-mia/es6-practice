const numbers = [15, 16, 23, 6, 4, 1, 9, 25, 38, 36, 41];

//returns an array with square root of all the values in the original/numbers array
// this method does not change the orignal array
const square = numbers.map((number) => {
	return 2 * number;
});

// console.log(evenNumbers);

const persons = [
	{ firstName: "Jisan", lastName: "Mia", age: 18 },
	{ firstName: "Shawon", lastName: "Hossain", age: 17 },
	{ firstName: "Mursalin", lastName: "Dewan", age: 20 },
];

const fullNames = persons.map((person) => {
	return `${person.firstName} ${person.lastName}`;
});
console.log(fullNames);
