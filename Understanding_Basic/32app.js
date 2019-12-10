//ROUTING REQUESTS

const http = require('http');                                       //IMPORT: http       

const server = http.createServer((req, res) => {                    //function server
    
    const url = req.url;                                            //request url

    if( url === '/'){
        res.write('<html');
        res.write('<head></head>Enter Message<title></title>');
        res.write('<body><form action="/message method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html');
        return res.end();           
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server !</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);                                                //listen to port 3000