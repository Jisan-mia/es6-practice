//Array.prototype.find()

let numbers = [1, 2, 3, 4, 5, 6, 10];

const result = numbers.find(function (currentValue, currentIndex, arr) {
	return currentValue > 4;
});

const friendsAge = [15, 19, 16, 18, 21, 17, 22];

const firstOldStudent = friendsAge.find((age) => age > 20);

console.log(firstOldStudent);
