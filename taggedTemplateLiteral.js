//tagged template literals

//friends
function friendModifer(string, ...values) {
	const m = string.reduce((prev, current) => {
		return prev + current + (values.length ? "Mr. " + values.shift() : "");
	}, "");
	return m;
}
const frineds = ["Shawon", "Porag", "Mursalin"];

console.log(
	friendModifer`My favourite friends are ${frineds[0]}, ${frineds[1]} and ${frineds[2]}.`
);

// team player
function modifer(strings, ...values) {
	const m = strings.reduce((prev, current) => {
		return prev + current + (values.length ? "Mr. " + values.shift() : "");
	}, "");
	return m;
}

const players = ["Sakib", "Tamim"];
console.log(
	modifer`We have ${players[0]} and ${players[1]} in our cricket team.`
);
