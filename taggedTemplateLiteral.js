//tagged template literals

//friends
function friendModifier(string, ...values) {
	const m = string.reduce((prev, current) => {
		return prev + current + (values.length ? "Mr. " + values.shift() : "");
	}, "");
	return m;
}
const friends = ["Shawon", "Porag", "Mursalin"];

console.log(
	friendModifier`My favorite friends are ${friends[0]}, ${friends[1]} and ${friends[2]}.`
);

// team player
function modifier(strings, ...values) {
	const m = strings.reduce((prev, current) => {
		return prev + current + (values.length ? "Mr. " + values.shift() : "");
	}, "");
	return m;
}

const players = ["Sakib", "Tamim"];
console.log(
	modifier`We have ${players[0]} and ${players[1]} in our cricket team.`
);
