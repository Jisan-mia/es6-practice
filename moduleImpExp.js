// imports and exports

// import * as test from "./moduleImpExp1.js"; // import everything that exported from the file

// import { a } from "./moduleImpExp1.js"; // named import

import external, { myFunc, pi } from "./moduleImpExp1.js"; // default import
console.log(external, pi);
myFunc();
