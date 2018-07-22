const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');
// var id = '5b544cd158b9aa3a4c362b3d';

// if(!ObjectID.isValid(id)){
	// console.log('Id is not valid');
// }

// Todo.find({
	// _id : id
// }).then( (todos) => {
	// console.log('find',todos);
// });


// Todo.findOne({
	// _id : id
// }).then( (todo) => {
	// console.log('find one',todo);
// });


// Todo.findById(id).then( (todo) => {
	
	// if(!todo){
		// return console.log('Id not found');
	// }
	// console.log('find by id : ',todo);
// })

var id = '5b508ddc2a080d387c78cdca';

User.findById(id).then( (user) => {
	if(!user){
		return console.log('Id not found');
	}
	
	console.log( JSON.stringify( user , undefined , 2) );
}).catch( (e) => {
	console.log(e);
});