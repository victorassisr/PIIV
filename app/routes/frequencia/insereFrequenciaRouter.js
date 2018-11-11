var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.post('/disciplina',function(req, res){

		console.log(req.body);

		var d = req.body;

		if(d.descricao != undefined){

			var sql = "INSERT INTO disciplina(descricao) VALUES('"+d.descricao+"')";

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ disciplina : d.descricao });
			}); //Query

		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}
	});//Fim rota
}