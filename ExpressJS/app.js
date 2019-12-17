const http = require('http');                       //import http

const express = require('express');                 //import expressJS
const app = express();                              //execute expressJS (initialize object)

app.use((req, res, next) => {                       //use = allow to add middleware function 
    console.log('In the middleware!');
    next();                                         //next = to allow request to continue to the next middleware in line
});                                          

app.use((req, res, next) => {                        
    console.log('In another middleware!');
    res.send('<h1>Hello from expressJS</h1>');
});                                          

//*LISTEN TO SERVER

// const server = http.createServer(app);
// server.listen(3000);

//OR

app.listen(3000);