//REDIRECTING REQUEST


const http = require('http');                                       //IMPORT: http library
const fs = require('fs');                                           //IMPORT: file stream library

const server = http.createServer((req, res) => {                    //function server
    
    const url = req.url;                                            //request url
    const method = req.method;                                      //request method

    if(url === '/'){
        res.write('<html');
        res.write('<head></head>Enter Message<title></title>');
        res.write('<body><form action="/message method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html');
        return res.end();                                           //end if resource
    }

    if(url === '/message' && method ==='POST'){
        fs.writeFileSync('message.txt', 'DUMMY');                   //add not into message.txt file
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();                                           //end if resource
    }

    res.setHeader('Content-Type', 'text/html');                     //set response html format
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server !</h1></body>');
    res.write('</html>');
    res.end();                                                      //end response
});

server.listen(3000);                                                //listen to port 3000