var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/professor/:id',function(req, res){

			var id = req.params.id;

			var sql = "SELECT * FROM professor WHERE idProfessor="+id;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}
				
				if(typeof resultSet[0] != "undefined"){
					res.status(200).send({ professor : resultSet });
				} else{
					res.status(200).send({ professor : 'Nenhum professor encontrado!' });
				} 
			}); //Query
	});//Fim rota
}