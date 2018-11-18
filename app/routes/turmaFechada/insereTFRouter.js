var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.post('/tf',function(req, res){

		console.log(req.body);

		var tf = req.body;

		if(tf.idSerie != undefined && tf.idTurma != undefined && tf.anoLetivo != undefined){

			var sql = "INSERT INTO turmaFechada(idSerie, idTurma, anoLetivo) VALUES('"+tf.idSerie+"','"+tf.idTurma+"','"+tf.anoLetivo+"')";

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