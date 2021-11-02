//function default parameter

/*
- when we don't pass any parameter to a function it will return undefined
- so we can give a default parameter value of that function
- but if we pass parameter through calling the function the value will be the passed parameter value
- if we pass undefined in the parameter the function will return the default parameter because the parameter is not defined
- if we pass null it will return null
*/
function myFunc(x = 10) {
	return x;
}

console.log(myFunc(undefined));
