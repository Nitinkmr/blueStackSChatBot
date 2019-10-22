var express = require('express');
require('./config/DBConfig');
require('./index');
var app = express();
var listener = app.listen(process.env.PORT || 8080, function(){
   console.log('Listening on port ' + listener.address().port); 
});