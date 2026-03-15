// multi-byte array

const a = new ArrayBuffer(4, {maxByteLength: 16}); // byteLength = 4
const view = new DataView(a);
// console.log(view.maxByteLength); // maxbytelength
// console.log(view.resizable);
// console.log(view);

const b = new ArrayBuffer(8);
const viewB = new DataView(b);

viewB.setInt8(0, 0x4);
viewB.setInt16(1, 0x45);

console.log(viewB.getInt8(0));
console.log(viewB.getInt8(1));
console.log(viewB.getInt8(2));
console.log(b)