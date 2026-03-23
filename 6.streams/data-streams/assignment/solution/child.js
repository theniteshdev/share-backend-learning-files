import fs from 'node:fs'
const readStream = fs.createReadStream("./main-sample.html");
readStream.pipe(process.stdout);