var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.post('/professor',function(req, res){

		console.log(req.body);

		if(req.body.nome != undefined && req.body.dataNascimento != undefined && req.body.dataInicioExecucao != undefined && req.body.cpf != undefined){
			var nome = req.body.nome;
			var cpf = req.body.cpf;
			var dataNascimento = req.body.dataNascimento;
			var dataIniExec = req.body.dataInicioExecucao;

			if(req.body.dataFimExecucao != undefined){
				var dataFimExec = req.body.dataFimExecucao;
			} else {
				var dataFimExec = "DEFAULT";
			}

			var sql = "INSERT INTO professor(idProfessor, nome, cpf, dataNascimento, dataInicioExecucao, dataFimExecucao) VALUES('default','"+nome+"','"+cpf+"','"+dataNascimento+"','"+dataIniExec+"','"+dataFimExec+"')";

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ nome: nome, cpf: cpf, dataNascimento: dataNascimento, dataInicioExecucao: dataIniExec, dataFimExecucao: dataFimExec });
			}); //Query

		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}
	});//Fim rota
}