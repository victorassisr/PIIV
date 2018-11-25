var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.post('/aluno',function(req, res){

		console.log(req.body);

		var a = req.body;

		if(req.body.nome != undefined && req.body.dataNascimento != undefined && req.body.turma != undefined &&  a.login != undefined && a.senha != undefined){
			var aluno = req.body;

			var nome = aluno.nome;
			var dataNascimento = aluno.dataNascimento;
			var turma = aluno.turma;

			var sql = "INSERT INTO aluno(nome, dataNascimento, turma) VALUES('"+nome+"','"+dataNascimento+"','"+turma+"')";

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				sqlSearch = "SELECT max(matricula) as matricula from aluno where nome = '"+aluno.nome+"' and dataNascimento = '"+aluno.dataNascimento+"'";

				con.query(sqlSearch, function(err, success, fields){
					var mat = success[0].matricula;

					sqlLogin = "INSERT INTO login(login, senha, idTipoUsuario, idUsuario) VALUES ('"+a.login+"', '"+a.senha+"', '2', '"+mat+"')";
					con.query(sqlLogin, function(err, success, fields){
						if(err){
							throw err;
						}
					});
				});

				res.status(200).send({ aluno : aluno });
			}); //Query		

		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}
	});//Fim rota
}