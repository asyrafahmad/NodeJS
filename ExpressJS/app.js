const http = require('http');                       //import http

const express = require('express');                 //import expressJS
const app = express();                              //execute expressJS (initialize object)

app.use((req, res, next) => {                       //use = allow to add middleware function 
    console.log('In the middleware!');
    next();                                         //next = to allow request to continue to the next middleware in line
});                                          

app.use((req, res, next) => {                        
    console.log('In another middleware!');
});                                          

const server = http.createServer(app);

server.listen(3000);