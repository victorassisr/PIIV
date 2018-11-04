var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/aluno/:id',function(req, res){

			var id = req.params.id;

			var sql = "SELECT * FROM aluno WHERE matricula="+id;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}
				
				if(typeof resultSet[0] != "undefined"){
					res.status(200).send({ aluno : resultSet });
				} else{
					res.status(200).send({ aluno : 'Nenhum aluno encontrado!' });
				} 
			}); //Query
	});//Fim rota
}