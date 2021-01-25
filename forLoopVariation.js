//for loop, for in, for of

// for loop
for (let i = 0; i <= 5; i++) {
	// console.log(i);
}

//for in
const myObj = {
	name: "Jisan",
	age: "18",
	fName: "Abul Bashar",
};

for (property in myObj) {
	// console.log(property, myObj[property]);
}

// for of
const myArr = [1, 2, 3, 4, 5, 6];
for (element of myArr) {
	// console.log(element);
}

const myStr = "My name is Jisan";
for (element of myStr) {
	// console.log(element);
}

//practice
//a function that takes an string and return each word of that string

function stringWord(string) {
	let splitStr = string.split(" ");
	for (element of splitStr) {
		console.log(element);
	}
}
stringWord(myStr);
