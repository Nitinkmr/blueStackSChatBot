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


/*

  mongoose.connection.once('open', function() {
            logger.info('MongoDB event open');
            logger.debug('MongoDB connected [%s]', url);

            mongoose.connection.on('connected', function() {
                logger.info('MongoDB event connected');
            });

            mongoose.connection.on('disconnected', function() {
                logger.warn('MongoDB event disconnected');
            });

            mongoose.connection.on('reconnected', function() {
                logger.info('MongoDB event reconnected');
            });

            mongoose.connection.on('error', function(err) {
                logger.error('MongoDB event error: ' + err);
            });

            // return resolve();
            return server.start();
        });

        return mongoose.connect(url, options, function(err) {
            if (err) {
                logger.error('MongoDB connection error: ' + err);
                // return reject(err);
                process.exit(1);
            }
        });
        
        * */