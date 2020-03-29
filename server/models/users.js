var mongoose =require('mongoose');
var Users =mongoose.model('devices',{
	email:{
type:String
	},
	password:{
type:String
	}
});

module.exports={Users};