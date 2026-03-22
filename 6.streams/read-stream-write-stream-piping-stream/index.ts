console.log("Setup done!");
import fs from "node:fs";
// readStream
const readStream = fs.createReadStream("./sample-data/index.html", {
  highWaterMark: 8,
});
readStream.setEncoding("utf-8");
readStream.on("data", function (chunks) {
  console.log(chunks);
});
readStream.on("end", function () {
  console.log("start reading tsconfig.json");
  readStream.path = "tsconfig.json";
  readStream.setEncoding("utf-8");
  readStream.on("data", function (chunks) {
    console.log(chunks);
  });
  console.log(readStream.path);
});
// readStream.readable = false;
console.log(readStream.readable);

console.log(readStream.readableEncoding);

// readStream.readableEnded = false; // this is readonly
console.log(readStream.readableEnded);

