const { MongoClient , ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , ( err , db ) => {
	
	if(err) {
		return console.log('Unable to connect to mongodb database' , err);
	}
	
	// db.collection('Todos').findOneAndUpdate({
			// _id : new ObjectID('5b4f758cee140cdaf5fd9a7c')
		// } , {
			// $set : { completed : true}
		// } , {returnOriginal : false}) .then( (result) => {
			// console.log(result);
		// } , (err) => {
			// console.log(err);
		// });
		
		
		db.collection('Users').findOneAndUpdate( {_id : ObjectID("5b4de9f71021ee26cc4b9c60")} , 
												{
												$set : {name : 'Mike'} ,
												$inc : {age : 6} 
												}, 
												{returnOriginal :false}).then( (result) => {
													console.log(result);
												} , (err) => {
													console.log(err);
												});
});