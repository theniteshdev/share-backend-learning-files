import fs, { write } from "node:fs";

const writableStream = fs.createWriteStream("./new-file.txt");

writableStream.write("Apple\n");
writableStream.write("Mango\n");
writableStream.write("Guava\n");
writableStream.end("Bye Bye\n");

writableStream.close();// if we don't close this file then finish event not emit
writableStream.on("finish", function():void{
    console.log("Writing finish!");
});

writableStream.on("open", function(fd):void{
    console.log("File Descriptor-")
    console.log(fd);
});

writableStream.on("close", function():void{
    console.log("File closed.");
});