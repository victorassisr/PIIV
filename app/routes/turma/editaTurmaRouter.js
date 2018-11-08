var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.put('/turma/:id',function(req, res){

		console.log(req.body);

		var idTurma = req.params.id;

		if(req.body.descTurma != undefined){
			
			var desc = req.body.descTurma;

			var sql = "UPDATE turma SET descTurma = '"+desc+"' WHERE idTurma="+idTurma;

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ turma : desc });
			}); //Query

		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}

	});//Fim rota
}