var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/aviso/:id',function(req, res){

			var id = req.params.id;

			var sql = "SELECT * FROM aviso WHERE idNoticia="+id;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}
				
				if(typeof resultSet[0] != "undefined"){
					res.status(200).send({ aviso : resultSet });
				} else{
					res.status(400).send({ aviso: 'Nenhuma aviso encontrado!' });
				} 
			}); //Query
	});//Fim rota
}