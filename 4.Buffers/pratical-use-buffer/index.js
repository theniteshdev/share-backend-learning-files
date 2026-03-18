// What is the practical use of Buffer

import fs from "node:fs/promises";
import {Buffer} from "node:buffer";

const buf = Buffer.from("Hello, World!","utf16le")
fs.writeFile("test.txt", buf); 

// here using buffer we can write files and many more use of Buffers


// sending request to my server
const response = await (await fetch("http://localhost:5000",{
    method: "POST",
    body: "I am nitesh."
})).text();
console.log(response);