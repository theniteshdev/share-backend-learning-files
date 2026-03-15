// typedArray in javascript

const a = new ArrayBuffer(8);
const typed = new Uint8Array(a);
const typed2 = new Uint8Array([444,45,46,47]);
console.log(typed2)
console.log(typed2.buffer);

typed[0] = 55;
typed[1] = 56;
typed[2] = 57;
typed[3] = 58;
typed[4] = 59;
typed[5] = 60;
typed[6] = 61;
typed[7] = 255; // signed-> -1 | unsigned-> 255
console.log(a);
console.log(typed);