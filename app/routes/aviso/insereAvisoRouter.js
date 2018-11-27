var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.post('/aviso',function(req, res){

		console.log(req.body);

		var aviso = req.body;

		if(aviso.titulo != undefined && aviso.autor != undefined && aviso.corpo != undefined && aviso.dataPostagem != undefined && aviso.idAutor != undefined && aviso.idTurmaFechada != undefined && aviso.idTipo){

			if(aviso.idTipo == 1){
				var sql = "INSERT INTO aviso(titulo, idAutor, autor, corpo, dataPostagem, idTurmaFechada) VALUES('"+aviso.titulo+"','"+aviso.idAutor+"',"+aviso.autor+"','"+aviso.corpo+"','"+aviso.dataPostagem+"','"+aviso.idTurmaFechada+"')";

				con.query(sql, function(err, success, fields){
					if(err){
						throw err;
					}

					res.status(200).send({ aviso : aviso });
				}); //query
			} else{
				var sql = "INSERT INTO aviso(titulo, idAutor, autor, corpo, dataPostagem, idTurmaFechada) VALUES('"+aviso.titulo+"','"+aviso.idAutor+"',"+aviso.autor+"','"+aviso.corpo+"','"+aviso.dataPostagem+"','0')";

				con.query(sql, function(err, success, fields){
					if(err){
						throw err;
					}

					res.status(200).send({ aviso : aviso });
				}); //query
			}

		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}
	});//Fim rota
}