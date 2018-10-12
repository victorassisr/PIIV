var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/professor',function(req, res){

			var sql = "SELECT * FROM professor";

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ professores : resultSet });
			}); //Query
	});//Fim rota
}