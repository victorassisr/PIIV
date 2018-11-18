var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/pdt',function(req, res){

			var sql = `select * from professor as p
				inner join professor_disciplina_turma as pdt on p.idprofessor = pdt.idprofessor
				inner join disciplina as d on pdt.idDisciplina = d.iddisciplina
				inner join turma as t on t.idturmaFechada = pdt.idturmaFechada`;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ pdt : resultSet });
			}); //Query
	});//Fim rota
}