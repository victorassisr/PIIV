var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/serie/:id',function(req, res){

			var id = req.params.id;

			var sql = "SELECT * FROM serie WHERE idSerie="+id;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}
				
				if(typeof resultSet[0] != "undefined"){
					res.status(200).send({ serie : resultSet });
				} else{
					res.status(400).send({ serie : 'Nenhuma série encontrada!' });
				} 
			}); //Query
	});//Fim rota
}