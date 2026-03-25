import http from "http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Transfer-Encoding", "chunked"); // important
  res.setHeader("Content-Disposition", "attachment; sample.txt")

  const fileHandle = await fs.open("./sample.txt");
  const readStream = fileHandle.createReadStream({ highWaterMark: 1 });
  let size = (await fileHandle.stat()).size;
  res.setHeader("Content-Length", size);
  readStream.on("data", (chunk) => {
    res.write(chunk);

    // readStream.pause();
    // setTimeout(() => {
    //   readStream.resume();
    // }, 100); // speed control (lower = faster typing)
  });

  readStream.on("end", async () => {
    await fileHandle.close();
    res.end();
  });
});

server.listen(4001, () => {
  console.log("Server Started");
});