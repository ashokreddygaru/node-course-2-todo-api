var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongodb://<dbuser>:<dbpassword>@ds149309.mlab.com:49309/ashokreddytestdatabase
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
