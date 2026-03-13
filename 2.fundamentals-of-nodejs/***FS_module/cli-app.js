#!/usr/bin/env nodejs
import fs from "node:fs/promises";

// word counter cli app
// handle file path
let givenFile = process.argv[2];
if (!givenFile) {
    console.log("Error: Please provide file path.")
    process.exit(1)
}
/*
 step for creating this file;
 step1- reading file
 step2- creting a object
 setp3- convert words into array
 step4- remove extra entaties from array
 setp5- add key to that object
 */
// step1
const fileContent = fs.readFile(`${givenFile}`, "utf-8");

fileContent.then((data) => {
    const counter = {};
    const array = data.replaceAll("\n", " ").replaceAll("  ", " ").split(" ");
    for (const word of array) {
        counter[word] = counter[word] + 1 || 1;
    }
    delete counter[""]
    console.log(counter);
    console.log("Total words-", Object.keys(counter).length)
})
    .catch((err) => {
        console.log(`Error while reading file: ${err.message}`)
    })
    .finally(() => {
        console.log("Programme exit!")
    });
