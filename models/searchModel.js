var mongoose = require('mongoose')
/**
 * Model to be persisted in DB (Mongo)
 */
var searchModel = new mongoose.Schema({
	url : String,
	date : Date,
	keyWord:String
});

module.exports =  mongoose.model('searchModel',searchModel);
