var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/professor',function(req, res){

			var sql = "SELECT * FROM professor";

			con.query(sql,function(err, success, fields){
				if(err){
					throw err;
				}

				console.log(success);
				res.status(200).send({ professores : success });
			}); //Query
	});//Fim rota
}