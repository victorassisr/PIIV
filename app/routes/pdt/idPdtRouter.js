var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/frequencia/:id',function(req, res){

			var id = req.params.id;

			var sql = "SELECT * FROM frequencia WHERE idFrequencia="+id;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}
				
				if(typeof resultSet[0] != "undefined"){
					res.status(200).send({ frequencia : resultSet });
				} else{
					res.status(400).send({ frequencia : 'Nenhuma disciplina encontrada!' });
				} 
			}); //Query
	});//Fim rota
}