var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/disciplina',function(req, res){

			var sql = "SELECT * FROM disciplina";

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ disciplinas : resultSet });
			}); //Query
	});//Fim rota
}