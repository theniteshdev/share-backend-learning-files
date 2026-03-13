import fs from "node:fs"
console.log("Hello, World!");
/*
Steps for creating this application-
step1
    readfile content file where user type
*/

// step1
const something = fs.watch("./type-test.txt", (event, filename) => {
    console.time();
    console.log(event);
    console.timeEnd();
});
