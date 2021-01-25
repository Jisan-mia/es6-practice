// all 6 falsy values below->
// false,
// "",
// 0,
// null,
// undefined,
// NaN ;
// everything else is truthy

let myVar = [];

if (!myVar) {
	console.log("I'm truthy");
} else {
	console.log("I'm falsy");
}
