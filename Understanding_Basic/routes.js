const fs = require('fs');


const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html');
        res.write('<head></head>Enter Message<title></title>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html');
        return res.end();                                                       //end if resource
    }

    if(url === '/message' && method ==='POST'){

        const body = [];                                                        //array decalaration

        //chunk = is a buffer which store binary data
        req.on('data', (chunk) => {                                             //listen data event
            console.log(chunk);                                     
            body.push(chunk);                                                   //add chunk into last element of array
        });

        req.on('end', () => {                                                   //listen end event
            const parsedBody = Buffer.concat(body).toString();                  //create a buffer and convert chunk into string
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err =>{                        //GOOD CODE : for high performance    
                res.statusCode = 302;                                           //code resource
                res.setHeader('Location', '/');
                return res.end();                                               //end if resource            
            });                       
        });
    }

    res.setHeader('Content-Type', 'text/html');                     //set response html format
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server !</h1></body>');
    res.write('</html>');
    res.end();      
};


// module.exports = requestHandler;                                                //export module requestHandler

//OR (for many)

module.exports = {                                                                //export module requestHandler
    handler: requestHandler,
    someText: 'Some hard code text'
};

//OR

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard code text';

//OR (shortcut)


// exports.handler = requestHandler;
// exports.someText = 'Some hard code text';
