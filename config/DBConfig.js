var mongoose = require('mongoose');
var config = require('../properties/application.properties');
/*
    DB connection file
*/ 
var dbConnectionUrl = config.db.connection.url;
var dbConnectionAlive = false;
mongoose.connect(dbConnectionUrl)
.then(()=> { 
    console.log(`Succesfully Connected to the Mongodb Database `)
    dbConnectionAlive = true;    
    }).catch(()=> { 
        console.log('Error Connecting to the Mongob Database')
    })
module.exports = mongoose;
