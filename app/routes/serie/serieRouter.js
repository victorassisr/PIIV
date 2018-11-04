var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/serie',function(req, res){

			var sql = "SELECT * FROM serie";

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ series : resultSet });
			}); //Query
	});//Fim rota
}