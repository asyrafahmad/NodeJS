const express = require('express');                 //import expressJS

const app = express();                              //execute expressJS (initialize object)

app.use('/', (req, res, next) => {
    console.log('This is always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {                        
    console.log('In another middleware!');
    res.send('<h1>The "Add Product" Page</h1>');
});                                          

app.use('/', (req, res, next) => {                        
    console.log('In another middleware!');
    res.send('<h1>Hello from expressJS</h1>');
});                                          

app.listen(3000);