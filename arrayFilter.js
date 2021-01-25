const numbers = [3, 6, 1, 12, 16, 24, 65, 45, 22, 26, 25, 85, 86, 38];

//filtering only even number from the numbers array (it doesn't change the main array(numbers))
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
