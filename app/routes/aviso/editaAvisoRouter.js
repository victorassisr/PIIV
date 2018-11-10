var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.put('/aviso/:id',function(req, res){

		console.log(req.body);

		var aviso = req.body;

		var id = req.params.id;

		if(aviso.titulo != undefined && aviso.autor != undefined && aviso.corpo != undefined && aviso.dataPostagem != undefined){

			var sql = "UPDATE aviso SET titulo = '"+aviso.titulo+"', autor = '"+aviso.autor+"', corpo = '"+aviso.corpo+"' WHERE idNoticia="+id;

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ aviso : aviso });
			}); //Query

		} else {
			res.status(400).send({ err : "O formato informado não é compativel!" });
		}

	});//Fim rota
}