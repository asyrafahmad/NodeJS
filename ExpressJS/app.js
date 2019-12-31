const path = require('path');

const express = require('express');                                             //import expressJS
const bodyParser = require('body-parser');                                      //import body parser

const app = express();                                                          //execute expressJS (initialize object)

app.set('view engine', 'pug');                                                 //app.set = allow us to set any values GLOBALLY on express application
app.set('views', 'views');

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(express.urlencoded({extended: true}));                                  //call body parser
app.use(express.static(path.join(__dirname, 'public')));                        //set path for public folder

app.use('/admin', adminData.routes);        
app.use('/shop', shopRoutes);  

//to display 404 not found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));       //status(404) = to response 404 not found
});

app.listen(3000);