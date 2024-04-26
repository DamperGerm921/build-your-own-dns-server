import * as dgram from 'dgram';

const server: dgram.Socket = dgram.createSocket('udp4');

server.on('message', (data, remoteAddr) => {
    const response = Buffer.from('');
    server.send(response, remoteAddr.port, remoteAddr.address);
});

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!")

// Uncomment this block to pass the first stage
//
// server.bind(2053, '127.0.0.1', () => {
//     console.log('Server is running on port 2053');
// });
