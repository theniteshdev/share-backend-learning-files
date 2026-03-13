// this is user module
import add from "./maths.js"
import fs from "node:fs";
import apple from "apple";
console.log(add(45, 4545));
const cont = fs.readFileSync("./maths.js", "utf-8");
console.log(cont);
console.log(apple);