var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/registrofrequencia',function(req, res){

			var sql = "SELECT * FROM frequencia_aluno";

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ frequencia_aluno : resultSet });
			}); //Query
	});//Fim rota
}