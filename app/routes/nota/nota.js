var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.post('/nota',function(req, res){

		console.log(req.body);

		var n = req.body;

		if(n.alunos != undefined && n.idDisciplina != undefined && n.idTurmaFechada != undefined && n.dataRegistro != undefined && n.atividade != undefined && n.total != undefined){

			var sql = "INSERT INTO nota(idDisciplina, idTurmaFechada, dataRegistro, atividade, total) VALUES('"+n.idDisciplina+"','"+n.idTurmaFechada+"','"+n.dataRegistro+"','"+n.atividade+"','"+n.total+"')";

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}
				
				sqlSearch = `select max(idnota) as id from nota where idDisciplina = '`+n.idDisciplina+`' and idTurmaFechada = '`+n.idTurmaFechada+`' and dataRegistro = '`+n.dataRegistro+`' and atividade = '`+n.atividade+`'`;

				con.query(sqlSearch, function(err, success, fields){
					if(err){
						throw err;
					}

					var idRes = success[0].id; //Pegar id da nota

					var alunos = req.body.alunos;

					for(var i in alunos){
						console.log();
						sqlNota = `insert into nota_aluno(idAluno, idNota, nota) VALUES ('`+alunos[i].idAluno+`','`+idRes+`','`+alunos[i].nota+`')`;
					
						con.query(sqlNota,function(err, success, fields){
							if(err){
								throw err;
							}
						}); //Query
					}

					//res.status(200).send({ idRes });
				}); //Query
				res.status(200).send({ msg : "Notas cadastradas com sucesso!" });
			}); //Query


		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}
	});//Fim rota
}