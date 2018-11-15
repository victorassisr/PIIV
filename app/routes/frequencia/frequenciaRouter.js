var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/frequencia',function(req, res){

			var sql = "SELECT * FROM frequencia";

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ frequencias : resultSet });
			}); //Query
	});//Fim rota
}