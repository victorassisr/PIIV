var conMysql = require('../../../config/conMysql');
var bcrypt = require("bcryptjs");

module.exports = function(app){

	var con = conMysql();

	app.post('/horario',function(req, res){

		console.log(req.body);

		var h = req.body;

		if(h.idPDT != undefined && h.idDia != undefined && h.horario != undefined){

			var sql = "INSERT INTO horario(idPDT, idDia, horario) VALUES('"+h.idPDT+"','"+h.idDia+"','"+h.horario+"')";

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ horario : h });
			}); //Query

		} else {
			res.status(400).send({ err : "O formato informado não é compativel!" });
		}
	});//Fim rota
}