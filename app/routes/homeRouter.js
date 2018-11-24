var conMysql = require('../../config/conMysql');

var con = conMysql();

module.exports = function(app){	
	app.get('/',function(req, res){
		res.status(200).send({ style: "Home" });
	});

	app.post('/',function(req, res){

		var notas = req.body;
		for(i in notas){

			var sql = "INSERT INTO teste(idAluno, nota) VALUES ('"+notas[i].id+"', '"+notas[i].nota+"')";

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				//res.status(200).send({ alunos : resultSet });
			}); //Query
		}
		res.status(200).send({ req : req.body });
	});
}