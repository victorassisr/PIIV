var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/horario/:id',function(req, res){

			var id = req.params.id;

			var sql = `select * from horario as h
						inner join professor_disciplina_turma as pdt on h.idPDT = pdt.idPDT
						inner join diassemana as dia on h.idDia = dia.idDia
						inner join disciplina as d on pdt.idDisciplina = d.idDisciplina
						inner join turmafechada as tf on pdt.idTurmaFechada = tf.idTurmaFechada
						inner join professor as p on p.idProfessor = pdt.idProfessor
						inner join serie as s on s.idSerie = tf.idSerie
						inner join turma as t on t.idTurma = tf.idTurma where pdt.idTurmaFechada=`+id;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}
				
				if(typeof resultSet[0] != "undefined"){
					res.status(200).send({ horario : resultSet });
				} else{
					res.status(400).send({ horario : 'Nenhum horário encontrado!' });
				} 
			}); //Query
	});//Fim rota
}