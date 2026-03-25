import http from "node:http"
import fs from "node:fs/promises"
import { exit } from "node:process";

const server = http.createServer(async (request, response) => {
    // setting common headers
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    const handleFile = await fs.open("./index.html");
    const readStream = handleFile.createReadStream({
        highWaterMark: 3
    });
    
    readStream.on("data", (chnks) => {
        response.write(chnks);
        readStream.pause();
        setTimeout(() => {
            readStream.resume();
        });
    });

   


    readStream.on("end", function (){
        response.end();
    })

});

server.listen(8000, "localhost", error => {
    if (error) exit(1);
    console.log("Server Up!")
    console.log("http://localhost:8000/")
});