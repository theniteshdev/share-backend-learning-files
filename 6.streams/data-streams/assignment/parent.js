// i have to read sample.html from child process and access on the parent file and create a new file

import {spawn} from 'node:child_process'
import fs from "node:fs";

const childProcess = spawn("node", ["./child.js"]);

childProcess.stdout.on("data", function(chunks){
    fs.writeFileSync("./sample-output.txt", chunks);
    console.log("file write done !");
});