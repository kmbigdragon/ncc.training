/*
 *  Equality operators
 */
let x = 1;
let y = "1";

// true, because y is a string and is casted to number while comparing
console.log(x == y);
// false, because y is a string and x is a number. This cares about both value and data type
console.log(x === y);

/*
 *  Modern operators
 */
let z;
// check if z is null/undefined, if true return the right-hand side value; otherwise, return z
console.log(z ?? "abc");

let w = false;
// ternary operator. if w is true return 1, else return 0
console.log(w ? 1 : 0);