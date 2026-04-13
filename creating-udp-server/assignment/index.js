import dgram from "node:dgram";
import fs from "node:fs";

const socket = dgram.createSocket("udp4");

// here is the udp server listnening
socket.bind(3000, "0.0.0.0");
const writeStream = fs.createWriteStream("./response.txt", { encoding: "utf-8" });
socket.on("message", function (message) {
    writeStream.write(message);
})