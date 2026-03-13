const getModule = require("./require");

let { a, b } = getModule("./test");

console.log(a, b);