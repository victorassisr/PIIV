var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/professor/:id',function(req, res){

			var id = req.params.id;

			var sql = "SELECT * FROM professor WHERE idProfessor="+id;

			con.query(sql,function(err, success, fields){
				if(err){
					throw err;
				}
				res.status(200).send({ professor : success });
			}); //Query
	});//Fim rota
}