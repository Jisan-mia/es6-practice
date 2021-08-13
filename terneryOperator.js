let age = 18;
let type;

if (age >= 18) {
	type = "adult";
} else {
	type = "child";
}

let x = 25;
let y = x >= 25;
console.log(y); // y = true

//using ternary operator
type = age >= 18 ? "adult" : "child";

// a function that checks whether you are rich, middleClass or poor according to your salary(don't take it seriously)

function socialPosition(salary) {
	return salary >= 50000
		? "Rich Guy"
		: salary >= 30000
		? "Middle Class Guy"
		: "Poor Guy";
}
const salary = 30000;
console.log(socialPosition(salary));
