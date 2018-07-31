const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123!';

bcrypt.genSalt(10 , (err , salt) => {
	bcrypt.hash(password , salt , (err , hash) => {
		console.log(hash);	
	});
});

var hashedPassword = '$2a$10$h3vCIf657d2BAKgXNnYl4u9rP/tj.THX9tMfgCG00PNvboqTEcqF6';

bcrypt.compare(password , hashedPassword , (err , res) => {
	console.log(res);
});

// var data = {
	// id : 11
// }

// var token = jwt.sign( data , 'abc123');
// console.log(token);

// var decoded = jwt.verify( token , 'abc123');
// console.log(decoded);


// var message = ' i am message number 1';
// var hash = SHA256(message);

// console.log(`message : ${message}`);
// console.log(`hash : ${hash}`);

// var data = {
	// id : 4
// }

// var token = {
	// data ,
	// hash : SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5 ;
// token.data.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if( token.hash === resultHash ){
	// console.log('Data was not changed');
// }
// else{
	// console.log('Data was changed. Dont trust !');
// }

