
'use strict';

module.exports = function(app){
	//insert roots here
	app.use('/api/Employees',require('./api/Employees'));
	app.use('/api/Department', require('./api/Department'));
};