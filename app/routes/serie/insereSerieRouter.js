var conMysql = require('../../../config/conMysql');
var bcrypt = require("bcryptjs");

module.exports = function(app){

	var con = conMysql();

	app.post('/serie',function(req, res){

		console.log(req.body);

		if(req.body.descSerie != undefined){

			var serie = req.body.descSerie;

			var sql = "INSERT INTO serie(idSerie, descSerie) VALUES('default','"+serie+"')";

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ serie : serie });
			}); //Query

		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}
	});//Fim rota
}