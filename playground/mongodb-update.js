/*Both the two statements are identical.{destructuring}*/

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
	if(err)
		return console.log("we are unable to connect to db");
	console.log("Connected to mangoDb server");
	const db = client.db('TodoApp');

	//FindOneAndUpdate
	db.collection('Users').findOneAndUpdate({
		name : 'poorna',
	},{
		$set : {name:'Poorna Chandran'}
	},
	{
		returnObject:false
	}).then( (res) => {
		console.log(res);
	})

	client.close();
});