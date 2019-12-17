const express = require('express');                 //import expressJS
const bodyParser = require('body-parser');          //import body parser

const app = express();                              //execute expressJS (initialize object)

app.use(express.urlencoded({extended: true}));                   //call body parser

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');        //send = to display
});                                          

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {           
    res.send('<h1>Hello from expressJS</h1>');
});                                          

app.listen(3000);