//USING NODE MODULES SYSTEM
//with routes.js

const http = require('http');                                                   //IMPORT: http library
const routes = require('./routes');                                             //IMPORT: routes.js file

console.log(routes.someText);

const server = http.createServer(routes.handler);                                     //routes as argument into createServer function

server.listen(3000);                                                            //listen to port 3000