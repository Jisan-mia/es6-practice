// let myArr = []; //array literal syntax
// let myArr = new Array(); //array constructor systax

function log(anything) {
	return console.log(anything);
}

// sets
let myArr = [1, 2, 3, 4, 5, 5, 5, 6, 5];

// log([...new Set(myArr)]);

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a, ...b]);
// log(union);

let intersection = new Set([...a].filter((x) => b.has(x)));
// log(intersection);

let difference = new Set([...a].filter((x) => !b.has(x)));
// log(difference);

// let mySet = new Set(myArr);

// mySet.add({
// 	a: 5,
// 	b: 2,
// });
// log(mySet);

// log([...mySet]);

// for (let value of mySet) {
// 	log(value);
// }

//method of set
// mySet.add(5).add(6).add("Bangladesh");
// log(mySet.size);
// mySet.clear()
// mySet.delete("Bangladesh");
// log(mySet.has("Bangladesh"))

// Weakset
const ws = new WeakSet();

class SomeClass {
	constructor() {
		ws.add(this);
	}
	method() {
		if (!ws.has(this)) {
			throw new Error("You cannot access this method directly");
		} else {
			return "I am method";
		}
	}
}

const j = new SomeClass();
log(j.method());

// log(SomeClass.prototype.method());
