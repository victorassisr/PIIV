var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/aviso',function(req, res){

			var sql = "SELECT * FROM aviso";

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ avisos : resultSet });
			}); //Query
	});//Fim rota
}