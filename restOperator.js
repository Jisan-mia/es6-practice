// rest operator

// we can get rest of the parameter passed from function calling using rest operator(...)
// access rest parameter by (...params)
// we can use this(...params) only one time in one function and it must be the last one of function parameter

function myfunc(a, ...params) {
	console.log(a);
	console.log(params);
}

myfunc(4, 5, 6, 7, 10); // return: 4 [5, 6, 7, 10]
