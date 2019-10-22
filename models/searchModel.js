var mongoose = require('mongoose')
var searchModel = new mongoose.Schema({
	url : String,
	date : Date,
	keyWord:String
});

module.exports =  mongoose.model('searchModel',searchModel);
