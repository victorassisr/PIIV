var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.post('/aviso',function(req, res){

		console.log(req.body);

		var aviso = req.body;

		if(aviso.titulo != undefined && aviso.autor != undefined && aviso.corpo != undefined && aviso.dataPostagem != undefined){

			var sql = "INSERT INTO aviso(titulo, autor, corpo, dataPostagem) VALUES('"+aviso.titulo+"','"+aviso.autor+"','"+aviso.corpo+"','"+aviso.dataPostagem+"')";

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ aviso : aviso });
			}); //Query

		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}
	});//Fim rota
}