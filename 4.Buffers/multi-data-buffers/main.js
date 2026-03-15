// creating 4 byte array buffer
const bufer = new ArrayBuffer(4);
const view = new DataView(bufer);

view.setInt8(0, 140);

console.log(view.getInt8(0))
console.log(view.getInt8(1))
console.log(view.getInt8(2))
console.log(view.getInt8(3))

