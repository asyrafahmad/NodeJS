const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const product = adminData.products;
    res.render('shop', {prods: products, docTitle: 'Shop'});                                                 //return the default templating engine                                     
});                                          

module.exports = router; 