var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.delete('/pdt/:id',function(req, res){

			var id = req.params.id;

			var sql = "DELETE FROM professor_disciplina_turma WHERE idPDT="+id;

			con.query(sql,function(err, success, fields){
				if(err){
					throw err;
				}
				
				res.status(200).send({ affectedRows : success.affectedRows });
			}); //Query
	});//Fim rota
}