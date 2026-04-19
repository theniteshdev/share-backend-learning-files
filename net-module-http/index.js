import { createReadStream } from 'node:fs';
import net from 'node:net'
import { pipeline } from 'node:stream';

// now create a  tcp server
const server = net.createServer((socket) => {
    // socket.on("data", (data) => {
    //     console.log(data.toString());
    // });

    socket.write(`HTTP/1.1 200 OK \n`);
    socket.write(`Access-Control-Allow-Origin: *\n`);
    socket.write(`Access-Control-Expose-Headers: *\n`);
    socket.write(`header1: hello-ji\n`);
    socket.write(`header2: hello-ji2\n\n`);

    const readStream = createReadStream('./sample.html');
    readStream.on("data", (chunk) => {
        // console.log(chunk.toString())
        // readStream.pipe(socket)
        socket.write(chunk)
    })
    // readStream.pipe(socket);
    // pipeline(readStream, socket);
    readStream.on("end", () => {
        console.log("\n\nfile ended")
        socket.end();
    });

    readStream.on("error", (err) => {
        console.log(err.message)
    })
});
// listening to the clients on port- 4000
server.listen(4000, '0.0.0.0');