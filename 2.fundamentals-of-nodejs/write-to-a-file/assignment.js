import fs from "node:fs/promises";

// reading file content
const fileContent = await fs.readFile("./old.txt");
console.log(fileContent);
// creating file
await fs.writeFile("./new.txt", fileContent)
console.log("Ok")

const photoBuffer = await fs.readFile("./my-photo.png");
// console.log(photoBuffer)
await fs.writeFile("./photo.png", photoBuffer);
console.log("done")
