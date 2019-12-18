const path = require('path');

//process = global variable that is available in all files
//mainModule = refer to the main (app.js)
//filename =  current file (../util/path.js)
module.exports = path.dirname(process.mainModule.filename);