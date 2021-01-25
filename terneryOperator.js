let age = 18;
let type;

if (age >= 18) {
	type = "adult";
} else {
	type = "child";
}

let x = 25;
let y = x >= 25;
console.log(y); // y = ture

//using ternary operator
type = age >= 18 ? "adult" : "child";

// a funciton that checks wheather you are rich, middleCass or poor according to your salary(don't take it seriously)

function socialPosition(salary) {
	return salary >= 50000
		? "Rich Guy"
		: salary >= 30000
		? "Middle Class Guy"
		: "Poor Guy";
}
const salary = 30000;
console.log(socialPosition(salary));
