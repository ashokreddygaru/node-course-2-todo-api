/*Both the two statements are identical.{destructuring}*/

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
	if(err)
		return console.log("we are unable to connect to db");
	console.log("Connected to mangoDb server");
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	name: 'Ashok',
	// 	age: 23
	// }, (err,result) =>{
	// 	if(err)
	// 	return console.log("we are unable to connect to db");
	// console.log(JSON.stringify(result.ops,undefined,2));
	// });

	// db.collection('Users').insertOne({
	// 	name:'Yuvraj singh',
	// 	hobbie:'Circket'
	// }, (err,result) => {
	// 	console.log(err);
	// 	console.log(result.ops[0]._id.getTimestamp());
	// 	// console.log(JSON.stringify(result.ops,undefined,2));
	// });

	db.collection('Users').find({
		_id:new ObjectID("5ad593973a2c6519fc08c4af")
	}).toArray().then( (docs) => {
		console.log("Users");
		console.log(JSON.stringify(docs, undefined,2));
	});

	client.close();
});