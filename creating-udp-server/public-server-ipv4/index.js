import http from "node:http";

const server = http.createServer((req, res) => {
    res.end("Hello from nitesh's server !");
});


server.listen("4000", "::", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("servr listen on")
        console.log(server.address())
    }
})