/*Both the two statements are identical.{destructuring}*/

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
	if(err)
		return console.log("we are unable to connect to db");
	console.log("Connected to mangoDb server");
	const db = client.db('TodoApp');

	//deleteMany

	// db.collection('Users').deleteMany({name:"Yuvraj"}).then((res) => {
	// 	console.log(res);
	// });

	//deleteOne

	db.collection('Users').deleteOne({name:"Yuvraj singh"}).then((res) => {
		console.log(res);
	});

	//FindOneAndDelete

	db.collection('Users').findOneAndDelete({hobbie:"cricket"}).then((res) => {
		console.log(res);
	});

	client.close();
});