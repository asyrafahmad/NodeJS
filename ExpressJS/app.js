const express = require('express');                 //import expressJS
const bodyParser = require('body-parser');          //import body parser

const app = express();                              //execute expressJS (initialize object)

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop.js');

app.use(express.urlencoded({extended: true}));                   //call body parser

app.use(adminRoutes);
app.use(shopRoutes);  

//to display 404 not found
app.use((req, res, next) => {
    res.status(404).send('<h1>404 : Page not found</h1>');
});

app.listen(3000);