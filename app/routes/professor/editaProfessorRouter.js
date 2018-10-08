var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.put('/professor/:id',function(req, res){

		console.log(req.body);

		var idProfessor = req.params.id;

		if(req.body.nome != undefined && req.body.dataNascimento != undefined && req.body.dataInicioExecucao != undefined && req.body.cpf != undefined && req.body.dataFimExecucao != undefined){
			
			var nome = req.body.nome;
			var cpf = req.body.cpf;
			var dataNascimento = req.body.dataNascimento;
			var dataIniExec = req.body.dataInicioExecucao;
			var dataFimExec = req.body.dataFimExecucao;

			var sql = "UPDATE professor SET nome = '"+nome+"', cpf = '"+cpf+"', dataNascimento = '"+dataNascimento+"', dataInicioExecucao = '"+dataIniExec+"', dataFimExecucao = '"+dataFimExec+"' WHERE idProfessor="+idProfessor;

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