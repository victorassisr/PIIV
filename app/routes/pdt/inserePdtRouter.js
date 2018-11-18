var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.post('/pdt',function(req, res){

		console.log(req.body);

		var pdt = req.body;

		if(pdt.idProfessor != undefined && pdt.idTurmaFechada != undefined && pdt.idDisciplina != undefined){

			var sql = "INSERT INTO professor_disciplina_turma(idDisciplina, idTurmaFechada, idProfessor) VALUES('"+pdt.idDisciplina+"','"+pdt.idTurmaFechada+"','"+pdt.idProfessor+"')";

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