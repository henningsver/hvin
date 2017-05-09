var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var WineFoodSchema   = new Schema({
	"_id": Number,
	"datum": String,
	"bas": String,
	"ratt": String,
	"tillbehor": String,
	"sas": String,
	"extra": String,
	"vin": {
		"vinID": Number,
		"argang": String,
		"namn": String
	},
	"betyg": {
		"mat": Number,
		"vin": Number,
		"kombi": Number
	},
	"kommentar": String
},
{
  versionKey: false // You should be aware of the outcome after set to false
});
module.exports = mongoose.model('vinMat', WineFoodSchema, 'vinMat');
