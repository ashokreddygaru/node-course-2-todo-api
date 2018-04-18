var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
// var {newTodo} = require('./models/user')

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	var todo = new Todo({
		text:req.body.text
	})
	todo.save().then((doc)=>{
		res.send(doc)
	},(e)=>{
		res.send(e);
	});
});

// app.get('/',(req,res)=>{
// 	console.log("working");
// });

app.listen(3000,()=>{
	console.log("Server up and running");
});

module.exports = {app};

// newTodo.save().then((data)=>{
// 	console.log('saved data' + data);
// },(e)=>{
// 	console.log('unable to save data');
// });

// var newTodo = new Todo({
// 	completed : true
// });

// newTodo.save().then((data)=>{
// 	console.log('saved data' + data);
// },(e)=>{
// 	console.log('unable to save data');
// });

//save new something