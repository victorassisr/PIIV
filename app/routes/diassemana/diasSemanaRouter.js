var conMysql = require('../../../config/conMysql');

module.exports = function(app){

	var con = conMysql();

	app.get('/dia',function(req, res){

			var sql = `select * from diassemana`;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ dias : resultSet });
			}); //Query
	});//Fim rota

	app.post('/dia',function(req, res){

			if(req.body.descDia == undefined){
				res.status(400).send({err: "O formato especificado não é válido!"});
			}

			var sql = `insert into diassemana(descDia) values ('`+req.body.descDia+`')`;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ dia : req.body.descDia });
			}); //Query
	});//Fim rota

	app.put('/dia/:id',function(req, res){

			if(req.params.id == undefined || req.body.descDia == undefined){
				res.status(400).send({err: "O formato especificado não é válido!"});
			}

			var sql = `update diassemana set descDia = '`+req.body.descDia+`' where idDia = '`+req.params.id+`'`;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ dia : req.body.descDia });
			}); //Query
	});//Fim rota

	app.delete('/dia/:id',function(req, res){

			if(req.params.id == undefined){
				res.status(400).send({err: "O formato especificado não é válido!"});
			}

			var sql = `delete from diassemana where idDia = '`+req.params.id+`'`;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				res.status(200).send({ affectedRows : resultSet.affectedRows });
			}); //Query
	});//Fim rota

	app.get('/dia/:id',function(req, res){

			if(req.params.id == undefined){
				res.status(400).send({err: "O formato especificado não é válido!"});
			}

			var sql = `select * from diassemana where idDia = '`+req.params.id+`'`;

			con.query(sql,function(err, resultSet, fields){
				if(err){
					throw err;
				}

				if(resultSet[0] == undefined){
					res.status(200).send({ err : "Nenhum dia encontrado!" });
				} else{
					res.status(200).send({ dia : resultSet });
				}
			}); //Query
	});//Fim rota
}