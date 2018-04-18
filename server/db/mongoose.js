var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds149309.mlab.com:49309/ashokreddytestdatabase');

module.exports = {mongoose};
