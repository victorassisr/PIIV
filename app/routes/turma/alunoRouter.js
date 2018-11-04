var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/aluno',function(req, res){

			var sql = "SELECT * FROM aluno";

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ alunos : resultSet });
			}); //Query
	});//Fim rota
}