//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

//	db.collection('Todos').findOneAndUpdate({
//		_id: new ObjectID('599ec020b524ee4b2666b338')
//	}, {
//		$set: {
//			completed: true
//		}
//	}, {
//		returnOriginal: false
//	}).then((result) => {
//		console.log(result);
//	});
	
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('599d7793e7227a148c9de8f8')
	}, {
		$set: {
			name: 'Patryk'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	//	db.close();
});