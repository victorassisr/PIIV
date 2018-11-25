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

	//Retorna id turmas fechadas   :idp = idProfessor, :idd=idDisciplina, :ano = anoLetivo.
	app.get('/tf/search/:idp/:idd/:ano',function(req, res){
		var x = req.params;
		if(x.idp == undefined || x.idd == undefined || x.ano == undefined){
			res.status(400).send({err : "O formato especificado não é válido!"});
		} else{

		var idP = x.idp;
		var idD = x.idd;
		var ano = x.ano;

			var sql = `select tf.idTurmaFechada from professor_disciplina_turma as pdt
						inner join turmafechada as tf on pdt.idturmafechada = tf.idturmafechada
						where idprofessor = `+idP+` and iddisciplina = `+idD+` and anoLetivo = `+ano;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}
				if(resultSet[0] == undefined){
					res.status(200).send({ err : "Não foi encontrado nenhuma turma." });
				}else{
					res.status(200).send({ turma : resultSet });
				}
			}); //Query
		}
	});//Fim rota
}