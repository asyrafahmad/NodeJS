const path = require('path');

const express = require('express');                                             //import expressJS
const bodyParser = require('body-parser');                                      //import body parser

const app = express();                                                          //execute expressJS (initialize object)

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(express.urlencoded({extended: true}));                                  //call body parser

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);  

//to display 404 not found
app.use((req, res, next) => {
    res.status(404).sendFiles(path.join(__dirname, 'views', '404.html'));       //status(404) = to response 404 not found
});

app.listen(3000);