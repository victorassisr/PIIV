var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.put('/serie/:id',function(req, res){

		console.log(req.body);

		var idSerie = req.params.id;

		if(req.body.descricao != undefined){
			
			var desc = req.body.descricao;

			var sql = "UPDATE serie SET descSerie = '"+desc+"' WHERE idSerie="+idSerie;

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ serie });
			}); //Query

		} else {
			res.status(400).send({ err : "O formato informado não é compativel!" });
		}

	});//Fim rota
}