const { MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , ( err , db ) => {
	
	if(err) {
		return conole.log('Unable to connect to mongodb database' , err);
	}
	
	/*db.collection('Todos').find({ completed : true}).toArray().then( (docs) => {
		console.log( JSON.stringify( docs , undefined , 2 ) );
	} , (err) => {
		console.log('Unable to fetch data' , err);
	});*/
	
	
	db.collection('Users').find({name : 'Mohammad'}).toArray().then( (docs) => {
		console.log( JSON.stringify( docs , undefined , 2 ) );
	} , (err) => {
			console.log('Unable to fetch data' , err);
	});
});

