//Array.prototype.push()

const numbers = [1, 2, 3, 4, 5];

//push method adds new item at the end of an array
//this method changes the main array or changes the length of an array
const pushElmts = numbers.push(6, 7);

const elmsToPush = [8, 9, 10, 11, 12, 13, 14, 15, 16];
for (let i = 0; i < elmsToPush.length; i++) {
	numbers.push(elmsToPush[i]);
}

console.log(pushElmts);
console.log(numbers);
