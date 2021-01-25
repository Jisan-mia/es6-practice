//es6 fat arrow function
// normal funciton
// function number() {
// 	return 10;
// }

// function number(n) {
// 	return n;
// }

//fat arrow function

// let number = () => 10; //cannot write return in one line fat arrow func

// let number = () => console.log(10);

// let number = (a, b) => a + b;

// this keyword

// var javaScriptObj = {
// 	name: "JavaScript",
// 	libraries: ["React", "Angular", "Vue"],
// 	printLibraries: function () {
// 		this.libraries.forEach((element) =>
// 			console.log(`${this.name} loves ${element}`)
// 		);
// 	},
// };

// javaScriptObj.printLibraries();

// dom related
// const searchInput = document.querySelector(".search");
// const display = document.querySelector(".result");
// const thanks = document.querySelector(".thanks");

//normal funciton that works perfectly
// function show() {
// 	display.innerHTML = this.value;
// 	var self = this;
// 	setTimeout(() => {
// 		console.log(this);
// 		thanks.innerHTML = `You have typed: ${this.value}`;
// 	}, 1000);
// }

// const show1 = () => {
// 	display.innerHTML = this.value; // this = window not the this of searchInput
// };

// searchInput.addEventListener("keyup", show);

//new keyword in fat arrow funciton
//vanila js function is it selft is an constructor
function Person(name) {
	this.name = name;
}

// Person1 is not a constructor
let Person1 = (name) => {
	this.name = name;
};

let jisan = new Person("Jisan");
