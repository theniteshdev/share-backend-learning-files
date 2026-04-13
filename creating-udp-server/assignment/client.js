import dgram from "node:dgram";
import fs from "node:fs"
// import Stream from "node:stream/promises";

const socket = dgram.createSocket("udp4");

const fd = fs.openSync("./client.sample.txt");

const readStream = fs.createReadStream("./client.sample.txt", { highWaterMark: 4 });
const readAFile = fs.readFileSync(fd, { highWaterMark: 2 });

readStream.on("data", (chunk) => {
    socket.send(chunk, 3000, "127.1.1.1", () => {
        console.clear();
        console.log(`Reading: ${Math.round(((readStream.bytesRead / readAFile.byteLength) * 100))}%`)
        console.log("messsage sent.");
    });
});

readStream.on("end", () => {
    process.exit(0);
})