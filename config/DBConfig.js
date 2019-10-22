var mongoose = require('mongoose');
var config = require('../properties/application.properties');

var dbConn = config.db.connection.url;
mongoose.connect(dbConn, { useMongoClient: true})
.then(()=> { console.log(`Succesfully Connected to the Mongodb Database `)})
.catch(()=> { console.log('Error Connecting to the Mongob Database')})
