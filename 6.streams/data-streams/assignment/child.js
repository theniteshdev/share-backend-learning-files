import fs from "node:fs";

const myFileData = fs.readFileSync("./sample.html");

process.stdout.write(myFileData);
