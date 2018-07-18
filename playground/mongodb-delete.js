const { MongoClient , ObjectID } = require('mongodb');

MongoClient.connect( 'mongodb://localhost:27017/TodoApp' , ( err , db ) => {
	
	if (err) {
		return console.log( 'Unable to connect to mongodb database' , err );
	}
	//deleteMany
	/*db.collection('Todos').deleteMany({ text : 'walk the dog'}).then( (result) => {
		console.log(result);
	} , (err) => {
		console.log(err);
	});*/
	
	//deleteOne
	/*db.collection('Todos').deleteOne({text : 'walk the dog'}).then( (result) => {
		console.log(result);
	} , (err) => {
		console.log(err);
	});*/
	
	//findOneAndDelete
	
	/*db.collection('Todos').findOneAndDelete({text : 'walk the dog'}).then( (result) => {
		console.log(result);
	} , (err) => {
		console.log(err);
	});*/
	
	db.collection('Users').deleteMany({ name : 'Mohammad'}).then( (result) => {
		console.log(result);
	} , (err) => {
		console.log(err);
	});
	
	db.collection('Users').findOneAndDelete({_id : new ObjectID('5b4decb9f65b831b586fed8d')}).then( (result) => {
		console.log(result);
	} , (err) => {
		console.log(err);
	});
	
	
});