var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/tf/:id',function(req, res){

			var id = req.params.id;

			var sql = `select * from turmaFechada as tf
						inner join serie as s on tf.idSerie = s.idSerie
						inner join turma as t on tf.idTurma = t.idTurma WHERE idTurmaFechada=`+id;




			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}
				
				if(typeof resultSet[0] != "undefined"){
					res.status(200).send({ turmaFechada : resultSet });
				} else{
					res.status(400).send({ pdt : 'Nenhuma turma fechada encontrada!' });
				} 
			}); //Query
	});//Fim rota
}