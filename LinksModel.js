var mongoose = require('mongoose')
var LinksSchema = new mongoose.Schema({
	url : String,
	date : Date,
	keyWord:String
});


const linksModel = mongoose.model('AppModel',LinksSchema);
module.exports = linksModel;