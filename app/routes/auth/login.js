var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.post('/login',function(req, res){


		if(req.body.user != undefined && req.body.user != "" && req.body.pass != undefined && req.body.pass != ""){
			u = req.body.user;
			p = req.body.pass;

			var sqlLogin = "SELECT email, senha, idTipo, idUser FROM login WHERE email ='"+u+"' AND senha='"+p+"'";

			con.query(sqlLogin, function(err, success, fields){
				if(err){
					res.status(501).send({err : "Ocorreu um erro na autenticação."});
				}
				else{
					if(success[0] != undefined){
						res.status(200).send({cred : success});
					} else {
						res.status(400).send({err: "Usuário não identificado."});
					}
				}
			}); //Query

		} else {
			if(req.body.user == undefined || req.body.user == ""){
				res.status(400).send("Usuário inválido.");
			}
			if(req.body.pass == undefined || req.body.pass == ""){
				res.status(400).send("Senha inválida.");
			}
		}
	});//Fim rota
}