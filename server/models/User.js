const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = mongoose.Schema({
	email : {
		type : String ,
		required : true ,
		trim : true ,
		minLength : 10 ,
		unique : true ,
		validate : {
			validator : validator.isEmail,
			message : '{VALUE} is not a valid email'
		}
	} ,
	password : {
		type : String ,
		minLength : 6 ,
		required : true ,
	} ,
	tokens : [{
		access : {
			type : String ,
			required : true
		} ,
		token : {
			type : String ,
			required : true
		}
	}]
});

UserSchema.methods.toJSON = function () {
	var user = this ;
	var userObject = user.toObject();
	
	return _.pick(userObject , ['_id' , 'email']);
}

UserSchema.methods.generateAuthToken = function () {
	var user = this ;
	var access = 'auth' ;
	var token = jwt.sign({_id : user._id.toHexString() , access } , 'abc123');
	
	user.tokens.push({access , token});
	
	return user.save().then( () => {
		return token;
	});
}

var User = mongoose.model( 'User',UserSchema);

module.exports = { User };