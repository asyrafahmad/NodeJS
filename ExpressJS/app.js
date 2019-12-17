const http = require('http');                       //import http

const express = require('express');                 //import expressJS
const app = express();                              //execute expressJS (initialize object)

const server = http.createServer(app);

server.listen(3000);