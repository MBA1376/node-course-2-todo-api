var mongoose = require('mongoose');

var User = mongoose.model( 'User',{
	email : {
		type : String ,
		required : true ,
		trim : true ,
		minLength : 10
	} ,
	password : {
		type : String ,
		minLength : 3 ,
		default : null
	}
});

module.exports = { User };