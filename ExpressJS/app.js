const express = require('express');                 //import expressJS
const bodyParser = require('body-parser');          //import body parser

const app = express();                              //execute expressJS (initialize object)

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop.js');

app.use(express.urlencoded({extended: true}));                   //call body parser

app.use(adminRoutes());
app.use(shopRoutes());  

app.listen(3000);