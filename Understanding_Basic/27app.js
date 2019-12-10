//CREATING A NODE SERVER

const http = require('http');                                       //IMPORT: http       

const server = http.createServer((req, res) => {                    //function server
    console.log(req);
});

server.listen(3000);                                                //listen to port 3000