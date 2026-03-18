import {Buffer} from "node:buffer";

const a = Buffer.alloc(4,65, "utf-8");
// console.log(a.toString());

const b = Buffer.alloc(6);
b.write("apple", "ascii");

console.log(b);
console.log(b.toString());

// how to send buffer data
console.log(b.toJSON()); // return an object

// slice

const c = Buffer.alloc(8);
c.write("Hello World!");
let another = c.slice(0, 5); // last index not includes
console.log(another.toString());


// subarry
const another2 = c.subarray(0, 5);
console.log(another2 == c); // false
console.log(another2.toString());

console.clear();
// copy method
const x = Buffer.alloc(8);
x.write("Hello");

const y = Buffer.alloc(8);

x.copy(y, 0, 0, 5); // copy on X

console.log(y.toString());
console.log(x.toString());

// includes method
console.log(y.includes("Hell", 3, "utf-8"));
console.log(y.includes("o", 3, "utf-8")); // this is true


// fill method
const xyz = Buffer.alloc(8).fill("a", 0, 4, "utf-8");
console.log(xyz.toString())

// readInt8
const yy = Buffer.alloc(8);
yy.write("tpple");
console.log(yy.readInt8(1));
console.log(yy.readInt8(0));
console.log(yy.toString());

// writeInt8
yy.writeInt8(97,0); // this replace the t to a
console.log(yy.toString());
console.clear()
// at
console.log(yy.at(0)); // return the ascii value of the character


// properties
const ab = Buffer.alloc(8);
ab.write("I am nitesh.")
console.log(ab.byteLength)
console.log(ab.length)
console.log(ab.buffer)
console.log(ab.byteOffset);

console.clear()
// buffer.from
// const aple = Buffer.from([97, 98]);
const aple = Buffer.from("Apple","utf-8");
console.log(aple.toString());
// aple.buffer

// const boy = Buffer.write("Apple"); -> not a function error
// console.log(boy.toString());

aple.write("ant", "utf-8");
console.log(aple.toString())