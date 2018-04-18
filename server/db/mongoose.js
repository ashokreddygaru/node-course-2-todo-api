var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//
mongoose.connect('mongodb://<ashokreddy261>:<@shok.0026K>@ds149309.mlab.com:49309/ashokreddytestdatabase');

module.exports = {mongoose};
