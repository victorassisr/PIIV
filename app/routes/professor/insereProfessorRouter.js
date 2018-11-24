var conMysql = require('../../../config/conMysql');
var bcrypt = require("bcryptjs");

module.exports = function(app){

	var con = conMysql();

	app.post('/professor',function(req, res){

		console.log(req.body);
		/*
		if(req.body.email == undefined && req.body.email == "" && req.body.senha == undefined && req.body.senha == ""){
			res.status(400).send({err: "Email ou Senha não são válidos!"});
		} else{
			email = req.body.email;
			var senha = req.body.senha;
		} */

		if(req.body.login != undefined && req.body.senha != undefined && req.body.nome != undefined && req.body.dataNascimento != undefined && req.body.dataInicioExecucao != undefined && req.body.cpf != undefined){
			var nome = req.body.nome;
			var cpf = req.body.cpf;
			var dataNascimento = req.body.dataNascimento;
			var dataIniExec = req.body.dataInicioExecucao;

			professor = req.body;

			if(req.body.dataFimExecucao != undefined){
				var dataFimExec = req.body.dataFimExecucao;
			} else {
				var dataFimExec = "0000-00-00";
			}

			var sql = "INSERT INTO professor(idProfessor, nome, cpf, dataNascimento, dataInicioExecucao, dataFimExecucao) VALUES('default','"+nome+"','"+cpf+"','"+dataNascimento+"','"+dataIniExec+"','"+dataFimExec+"')";

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}
			});

				sqlSearch = "SELECT max(idProfessor) as idProf from professor where cpf = '"+cpf+"'";

				con.query(sqlSearch, function(err, success, fields){
					var idProf = success[0].idProf;

					sqlLogin = "INSERT INTO login(login, senha, idTipoUsuario, idUsuario) VALUES ('"+req.body.login+"', '"+req.body.senha+"', '1', '"+idProf+"')";
					con.query(sqlLogin, function(err, success, fields){
						if(err){
							throw err;
						}
					});

				res.status(200).send({ professor : professor });
			}); //Query

		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}
	});//Fim rota
}