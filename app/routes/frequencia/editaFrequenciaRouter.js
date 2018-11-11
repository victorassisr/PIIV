var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.put('/disciplina/:id',function(req, res){

		console.log(req.body);

		var d = req.body;

		var id = req.params.id;

		if(d.descricao != undefined){

			var sql = "UPDATE disciplina SET descricao = '"+d.descricao+"' WHERE idDisciplina="+id;

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ disciplina : d });
			}); //Query

		} else {
			res.status(400).send({ err : "O formato informado não é compativel!" });
		}

	});//Fim rota
}