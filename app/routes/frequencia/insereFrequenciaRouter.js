var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.post('/frequencia',function(req, res){

		console.log(req.body);

		var f = req.body;

		if(f.idDisciplina != undefined && f.idTurmaFechada != undefined && f.dataRegistro != undefined){

			var sql = "INSERT INTO frequencia(idDisciplina, idTurmaFechada, dataRegistro) VALUES('"+f.idDisciplina+"','"+f.idTurma+"','"+f.dataRegistro+"')";

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ frequencia : f });
			}); //Query

		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}
	});//Fim rota
}