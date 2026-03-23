import {spawn} from 'node:child_process'
import fs from 'node:fs'
const childProcess = spawn("node", ["./child.js"]);
const writeStream = fs.createWriteStream("./test-sample.txt");
childProcess.stdout.pipe(writeStream);