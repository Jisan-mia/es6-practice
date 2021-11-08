// for loop variation in javascript

// for = loops through a block of code a number of times
for (let i = 0; i <= 5; i++) {
	console.log(i);
}

// for in = loops through the properties of an object/array
const studentObj = {name: 'Joe', roll: 1233, age: 21};

for (property in studentObj) {
	console.log(property, myObj[property]);
}

// for of = loops through the 
const myArr = [1, 2, 3, 4, 5, 6];
for (element of myArr) {
	// console.log(element);
}

const myStr = "My name is Jisan";
for (element of myStr) {
	// console.log(element);
}
