var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/pdt/:id',function(req, res){

			var id = req.params.id;

			var sql = `select * from professor as p
				inner join professor_disciplina_turma as pdt on p.idprofessor = pdt.idprofessor
				inner join disciplina as d on pdt.idDisciplina = d.iddisciplina
				inner join turmafechada as t on t.idturmaFechada = pdt.idturmaFechada
				inner join turma as trm on trm.idTurma = t.idTurma
				inner join serie as s on t.idSerie = s.idSerie
				WHERE idPDT=`+id;




			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}
				
				if(typeof resultSet[0] != "undefined"){
					res.status(200).send({ pdt : resultSet });
				} else{
					res.status(400).send({ pdt : 'Nenhum relacionamento PDT encontrado!' });
				} 
			}); //Query
	});//Fim rota
}