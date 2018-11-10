var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/disciplina/:id',function(req, res){

			var id = req.params.id;

			var sql = "SELECT * FROM disciplina WHERE idDisciplina="+id;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}
				
				if(typeof resultSet[0] != "undefined"){
					res.status(200).send({ disciplina : resultSet });
				} else{
					res.status(400).send({ disciplina : 'Nenhuma disciplina encontrada!' });
				} 
			}); //Query
	});//Fim rota
}