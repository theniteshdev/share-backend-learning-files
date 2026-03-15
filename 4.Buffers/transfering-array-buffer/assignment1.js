import fs from "node:fs/promises";
// create a array buffer and write your-name into that array buffer using typedArray
/**
 nitesh=6E 69 74 65 73 68
 */

const myname = new ArrayBuffer(6); // 8 byte array buffer
const typedArray = new Uint8Array(myname);
typedArray[0] = 0x6e;
typedArray[1] = 0x69;
typedArray[2] = 0x74;
typedArray[3] = 0x65;
typedArray[4] = 0x73;
typedArray[5] = 0x68;

const decoder = new TextDecoder("utf-8");
const decodeText = decoder.decode(typedArray);
fs.writeFile("./out.txt", typedArray)
    .then(() => {
        console.log("Done")
    })