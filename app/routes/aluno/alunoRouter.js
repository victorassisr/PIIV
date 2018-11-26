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


	app.get('/aluno/turma/:id',function(req, res){

		var id = req.params.id;

			var sql = "SELECT * FROM aluno where turma = "+id;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ alunos : resultSet });
			}); //Query
	});//Fim rota


	app.get('/aluno/horario/:id',function(req, res){

		var id = req.params.id;

			var sql = `select * from aluno as a
					inner join professor_disciplina_turma as pdt on pdt.idTurmaFechada = a.turma
					inner join horario as h on h.idPDT = pdt.idpdt
					where matricula = `+id;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ horarios : resultSet });
			}); //Query
	});//Fim rota
}