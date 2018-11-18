var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.put('/tf/:id',function(req, res){

		console.log(req.body);

		var tf = req.body;

		var id = req.params.id;

		if(tf.idSerie != undefined && tf.idTurma != undefined && tf.anoLetivo != undefined){

			var sql = "UPDATE turmaFechada SET idSerie = '"+tf.idSerie+"', idTurma = '"+tf.idTurma+"', anoLetivo = '"+tf.anoLetivo+"' WHERE idTurmaFechada="+id;

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ turmaFechada : tf });
			}); //Query

		} else {
			res.status(400).send({ err : "O formato informado não é compativel!" });
		}

	});//Fim rota
}