var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.put('/horario/:id',function(req, res){

		console.log(req.body);

		var id = req.params.id;
		var h = req.body;

		if(h.idPDT != undefined && h.idDia != undefined && h.horario != undefined){

			var sql = "UPDATE horario SET idPDT = '"+h.idPDT+"', idDia = '"+h.idDia+"', horario = '"+h.horario+"' WHERE idHorario="+id;

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