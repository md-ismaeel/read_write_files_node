const http = require("http")
const port = 4000;
const fs = require("fs")
var path = require('path');
var x = path.join('Users', 'Refsnes', '..', 'data/Product.json');

console.log(x);

// const server = http.createServer((request, response) => {
//     // console.log(request.url, 'URL');
//     // console.log(request.method, "Method");

//     try {
//         if (request.url === "/product" && request.method === "GET") {
//             const path = 'data/Product.json';

//             const data = JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' }))

//             response.writeHead(200, { 'content-type': 'application/json' })

//             response.end(JSON.stringify(data))

//         }

//     } catch (err) {

//         response.writeHead(200, { 'content-type': 'application/json' })

//         response.end(JSON.stringify({
//             message: 'Internal Server error Happen', err
//         }))

//     }
// })


// server.listen(port, () => {
//     console.log('server is running at port', +  port);
// })