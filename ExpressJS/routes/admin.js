const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const product = [];                                                         //set product as an array

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));        //send = to display
});                                          

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);                                                  //old version get input data
    product.push({ title: req.body.title }); 
    res.redirect('/');
});

//module.exports = router;                                                  //old version
//or
exports.routes = router;
exports.products = product;