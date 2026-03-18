import http from "node:http";
import {Buffer} from "node:buffer";

const handleRequest = function(req, res){
    const response = Buffer.from("Hello, World !");
    res.write(response.toString());
    res.end();
    const intro = req.body;
    console.log(intro)
    // console.log(req.headers);
};
const app = http.createServer(handleRequest);

app.listen("5000", "localhost", ()=>{
    console.log("Ok running fine!")
});