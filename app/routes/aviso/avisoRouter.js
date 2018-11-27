var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/aviso',function(req, res){

			var sql = "SELECT * FROM aviso";

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				if(resultSet[0] == undefined){
					res.status(200).send({ err : "Nenhum aviso encontrado!" });
				} else{
					res.status(200).send({ avisos : resultSet });
				}
			}); //Query
	});//Fim rota



	app.get('/aviso/turma/:idTurma',function(req, res){

			var id = req.params.idTurma;

			var sql = "SELECT * FROM aviso where idTurmaFechada = "+id;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				if(resultSet[0] == undefined){
					res.status(200).send({ err : "Nenhum aviso encontrado!" });
				} else{
					res.status(200).send({ avisos : resultSet });
				}
			}); //Query
	});//Fim rota


	app.get('/aviso/professor/:id',function(req, res){

			var id = req.params.id;

			var sql = "SELECT * FROM aviso where idAutor = "+id;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				if(resultSet[0] == undefined){
					res.status(200).send({ err : "Nenhum aviso encontrado!" });
				} else{
					res.status(200).send({ avisos : resultSet });
				}
			}); //Query
	});//Fim rota
}