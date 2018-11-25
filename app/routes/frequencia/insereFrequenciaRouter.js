var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.post('/frequencia',function(req, res){

		console.log(req.body);

		var f = req.body;

		if(f.alunos != undefined && f.idDisciplina != undefined && f.idTurmaFechada != undefined && f.dataRegistro != undefined){

			var sql = "INSERT INTO frequencia(idDisciplina, idTurmaFechada, dataRegistro) VALUES('"+f.idDisciplina+"','"+f.idTurmaFechada+"','"+f.dataRegistro+"')";

			con.query(sql, function(err, success, fields){
				if(err){
					throw err;
				}
				
				sqlSearch = `select max(idFrequencia) as id from frequencia where idDisciplina = '`+f.idDisciplina+`' and idTurmaFechada = '`+f.idTurmaFechada+`' and dataRegistro = '`+f.dataRegistro+`'`;

				con.query(sqlSearch, function(err, success, fields){
					if(err){
						throw err;
					}

					var idRes = success[0].id; //Pegar id da frequencia

					var alunos = req.body.alunos;

					for(var i in alunos){
						console.log();
						sqlFrequencia = `insert into frequencia_aluno(idAluno, idFrequencia, status) VALUES ('`+alunos[i].idAluno+`','`+idRes+`','`+alunos[i].status+`')`
					
						con.query(sqlFrequencia,function(err, success, fields){
							if(err){
								throw err;
							}
						}); //Query
					}

					//res.status(200).send({ idRes });
				}); //Query
				res.status(200).send({ msg : "Frequencia cadastrada com sucesso!" });
			}); //Query


		} else {
			res.status(200).send({ err : "O formato informado não é compativel!" });
		}
	});//Fim rota
}