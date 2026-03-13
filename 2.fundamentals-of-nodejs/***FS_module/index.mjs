#!/usr/bin/env nodejs
// import fs from "node:fs";
import fs from "node:fs/promises"

// const summary = fs.readFileSync("./summary.txt", "utf-8");
// console.log(summary);

// fs.readFile("./summary.txt", "utf-8", (err, data) => {
//     console.log(data);
// });

fs.readFile("./summary.txt", "utf-8")
    .then((data) => {
        console.log("Ok");
        console.log(data);
    });