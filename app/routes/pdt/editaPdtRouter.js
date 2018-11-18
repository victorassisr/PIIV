var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.put('/pdt/:id',function(req, res){

		console.log(req.body);

		var pdt = req.body;

		var id = req.params.id;

		if(pdt.idProfessor != undefined && pdt.idTurmaFechada != undefined && pdt.idDisciplina != undefined){

			var sql = "UPDATE professor_disciplina_turma SET idDisciplina = '"+pdt.idDisciplina+"', idTurmaFechada = '"+pdt.idTurmaFechada+"', idProfessor = '"+pdt.idProfessor+"' WHERE idPDT="+id;

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ pdt : pdt });
			}); //Query

		} else {
			res.status(400).send({ err : "O formato informado não é compativel!" });
		}

	});//Fim rota
}