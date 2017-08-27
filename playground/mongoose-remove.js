const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//	console.log(result);
//});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59a31fba8478c1e9dcae3de4'}).then((todo) => {
	
});

Todo.findByIdAndRemove('59a31fba8478c1e9dcae3de4').then((todo) => {
	console.log(todo);
});