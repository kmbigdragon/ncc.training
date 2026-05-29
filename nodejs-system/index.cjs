require("dotenv").config();
const { sum, multiply } = require("./math.cjs");

console.log(sum(2, 3));
console.log(multiply(2, 3));

console.log(process.platform);
console.log(process.version);
console.log(process.env.SECRET);
console.log(__dirname);
console.log(__filename);