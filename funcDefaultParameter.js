// function default parameter value
/*
- Suppose, a function takes a parameter x and returns that x
- now, if we forgot to pass the parameter while calling the function, it will return undefined
- But we need the function to return something other than undefined. 
- in that case, we can assign a default value on that parameter which will be the value of that parameter if we don't pass any arguments while calling.
- but if we pass any arguments the parameter value will be the passed argument value
- if we pass undefined the function will return the default parameter value because the parameter is not defined
- if we pass null it will return null, since this time we defined the parameter value to null
*/

function myFunc(x = 10) {
	return x;
}

console.log(myFunc()) // 10
console.log(myFunc(25)) // 25
console.log(myFunc(undefined)); // 10
console.log(myFunc(null)) // null
