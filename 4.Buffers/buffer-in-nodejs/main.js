// ways of creating nodejs-buffer
import {Buffer } from "node:buffer"; // this is optional

const nodeBuffer1 = Buffer.alloc(4);
const nodeBuffer2 = Buffer.from([97,98,99,100]);
const nodeBuffer3 = Buffer.allocUnsafe(4);

console.log(nodeBuffer1.buffer.byteLength);
console.log(nodeBuffer2.buffer.byteLength);
console.log(nodeBuffer3.buffer.byteLength);