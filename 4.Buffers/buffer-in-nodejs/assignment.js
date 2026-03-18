import {Buffer} from "node:buffer";

const a = new ArrayBuffer(4);
const typedArr = new Uint8Array(a);
typedArr[0] = 0x41; // A
typedArr[1] = 0x42; // B
typedArr[2] = 0x43; // C
typedArr[3] = 0x44; // D

const nodeBuffer = Buffer.from(a);
const decoder = new TextDecoder("utf-8");
const decodeText = decoder.decode(nodeBuffer);
console.log(decodeText);

// assignment done
console.log(nodeBuffer.toString("utf-8")); // this is work without decoder
