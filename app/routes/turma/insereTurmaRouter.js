var conMysql = require('../../../config/conMysql');
var bcrypt = require("bcryptjs");

module.exports = function(app){

	var con = conMysql();

	app.post('/turma',function(req, res){

		console.log(req.body);

		if(req.body.descTurma != undefined){
			var desc = req.body.descTurma;

			var sql = "INSERT INTO turma(descTurma) VALUES('"+desc+"')";

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