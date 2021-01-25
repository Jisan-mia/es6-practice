// all 6 falsy values below->
// false,
// "",
// 0,
// null,
// undefined,
// NaN ;
// everything else is truthy

let myVar = [];

// if (myVar) {
// 	console.log("I'm truthy");
// } else {
// 	console.log("I'm falsy");
// }

// a function to check if the provided value is a falsy value or truthy
function isFalsy(value) {
	let isFalse;
	if (value === false) {
		isFalse = "falsy";
	} else if (value === "") {
		isFalse = "falsy";
	} else if (value === 0) {
		isFalse = "falsy";
	} else if (value === null) {
		isFalse = "falsy";
	} else if (isNaN(value)) {
		isFalse = "falsy";
	} else if (value === undefined) {
		isFalse = "falsy";
	} else {
		isFalse = "It's not a falsy value. It's truthy";
	}
	return isFalse;
}
const value = NaN;
console.log(isFalsy(value));
