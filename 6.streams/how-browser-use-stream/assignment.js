import http from "node:http";
import fs from "node:fs/promises";
let count = 1;
const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "text/plain")
    const fileHandle = await fs.open("./sample.txt");
    const readStream = fileHandle.createReadStream();

    readStream.on("data", (chunk) => {
        res.write(chunk);
        readStream.pause();
        setTimeout(()=>{
            readStream.resume();
        }, 1000)
    })

    readStream.on("close", function () {
        console.log("close reading.", count++)
        res.end("done!");
    })
});

server.listen(4000, function (error) {
    if (error) {
        console.log("server side error!")
    }
    console.log("Assignment done!");
});