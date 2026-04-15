import dgram from "node:dgram"

// Create IPv6 socket
const client = dgram.createSocket('udp6');

// Your server details
const SERVER_IP = '2401:4900:1ca9:a6dd:a825:2c53:63b:74b3';
const PORT = 41234;

// Message to send
const message = Buffer.from('Hello from client 🌍');

// Send message
client.send(message, PORT, SERVER_IP, (err) => {
    if (err) {
        console.error('Send error:', err);
        client.close();
    } else {
        console.log('Message sent!');
    }
});

// Listen for response
client.on('message', (msg, rinfo) => {
    console.log(`Reply from ${rinfo.address}:${rinfo.port}`);
    console.log(`Data: ${msg.toString()}`);
});

// Optional: handle errors
client.on('error', (err) => {
    console.error('Client error:', err);
    client.close();
});