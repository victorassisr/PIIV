var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/tf',function(req, res){

			var sql = `select * from turmaFechada as tf
						inner join serie as s on tf.idSerie = s.idSerie
						inner join turma as t on tf.idTurma = t.idTurma`;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ turmaFechada : resultSet });
			}); //Query
	});//Fim rota


	//Retorna anos das turmas fechadas.
	app.get('/tf/y',function(req, res){

			var sql = `select distinct anoLetivo from turmaFechada`;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ anos : resultSet });
			}); //Query
	});//Fim rota
}