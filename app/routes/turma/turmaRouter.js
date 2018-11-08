var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/turma',function(req, res){

			var sql = "SELECT * FROM turma";

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ turmas : resultSet });
			}); //Query
	});//Fim rota
}