var mysql = require('mysql');

module.exports = function(){
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'victoradmin',
		database: 'portal_escolar'
	});

	return connection;
}