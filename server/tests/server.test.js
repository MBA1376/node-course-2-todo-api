const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');
var {Todo} = require('./../models/Todo');

beforeEach( (done) => {
	Todo.remove({}).then( () => done() );
});

describe(' Post /todos' , () => {
	it('should create a new todo' , (done) => {
		
		var text = 'test todo text' ;
		
		request(app)
			.post('/todos')
			.send({text})
			.expect(200)
			.expect( (res) => {
				expect(res.body.text).toBe(text);
			})
			.end( (err , res) => {
				if(err) {
					return done(err);
				}
				
				Todo.find().then( (todos) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done();
				})
				.catch( (e) => done(e));
			});
	});
	
	it('should not create todo with invalid body data' , (done) => {
		
		var text = '';
		
		request(app)
			.post('/todos')
			.send({text})
			.expect(400)
			.end( (err , res) => {
				
				if(err) {
					return done(err);
				}
				
				Todo.find().then( (todos) => {
					expect(todos.length).toBe(0);
					//expect(todos[0].text).toBe('');
					done();
				})
				.catch( (e) => done(e) );
			})
		
	});
});