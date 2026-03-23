import fs from "node:fs";
console.time("reading-start")
const readStream = fs.createReadStream("./sample-data/index.html", {highWaterMark: 2});
const writeStream = fs.createWriteStream("./sample-data/index2.html");

readStream.pipe(writeStream);


readStream.on("close", function(){
    console.timeEnd("reading-start");
})
