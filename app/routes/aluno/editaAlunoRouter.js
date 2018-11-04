var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.put('/aluno/:id',function(req, res){

		console.log(req.body);

		var matricula = req.params.id;

		if(req.body.nome != undefined && req.body.dataNascimento != undefined && req.body.serie != undefined && req.body.turma != undefined && req.body.ano_letivo != undefined){
			
			var aluno = req.body;

			var nome = aluno.nome;
			var serie = aluno.serie;
			var dataNascimento = aluno.dataNascimento;
			var turma = aluno.turma;
			var ano_letivo = aluno.ano_letivo;

			var sql = "UPDATE aluno SET nome = '"+nome+"', serie = '"+serie+"', dataNascimento = '"+dataNascimento+"', turma = '"+turma+"', ano_letivo = '"+ano_letivo+"' WHERE matricula="+matricula;

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ aluno });
			}); //Query

		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}

	});//Fim rota
}