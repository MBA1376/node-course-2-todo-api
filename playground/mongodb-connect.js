//const MongoClient = require('mongodb').MongoClient;
const { MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , ( err , db ) => {
	
	if(err){
		return console.log('Unable to connect to Mongodb Server');
	}
	
	console.log('connected to mongodb server');
	
	/*db.collection('Todos').insertOne({
		text : 'some text right here' , 
		completed : false
	} , ( err , result ) => {
		if(err) {
			return console.log('Unable to connect to database' , err);
		}
		
		console.log(JSON.stringify( result.ops , undefined , 2 ));
	});*/
	
	db.collection('Users').insertOne({
		name : 'Mohammad' ,
		age : 21 ,
		location : 'shahdeh'
	} , ( err , result ) => {
		
			if(err) {
				return console.log('Unable to connect to database' , err);
			}
			
			console.log(JSON.stringify(result.ops , undefined , 2));
	});
	
	db.close();
});