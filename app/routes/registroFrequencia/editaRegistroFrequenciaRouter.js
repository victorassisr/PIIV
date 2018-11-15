var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.put('/frequencia/:id',function(req, res){

		console.log(req.body);

		var f = req.body;

		var id = req.params.id;

		if(f.idDisciplina != undefined && f.idTurma != undefined && f.dataRegistro != undefined){

			var sql = "UPDATE frequencia SET idDisciplina = '"+f.idDisciplina+"', idTurma = '"+f.idTurma+"', dataRegistro = '"+f.dataRegistro+"' WHERE idFrequencia="+id;

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ frequencia : f });
			}); //Query

		} else {
			res.status(400).send({ err : "O formato informado não é compativel!" });
		}

	});//Fim rota
}