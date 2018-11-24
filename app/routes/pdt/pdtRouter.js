var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/pdt',function(req, res){

			var sql = `select * from professor as p
				inner join professor_disciplina_turma as pdt on p.idprofessor = pdt.idprofessor
				inner join disciplina as d on pdt.idDisciplina = d.iddisciplina
				inner join turmafechada as t on t.idturmaFechada = pdt.idturmaFechada
				inner join turma as trm on t.idturma = trm.idturma`;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ pdt : resultSet });
			}); //Query
	});//Fim rota



	app.get('/pdt/d/:id',function(req, res){

		var idProfessor = req.params.id;

			var sql = `select distinct(d.descricao) from professor_disciplina_turma as pdt
	inner join disciplina as d on d.iddisciplina = pdt.iddisciplina
	where idProfessor =` + idProfessor;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ disciplinas : resultSet });
			}); //Query
	});//Fim rota

}