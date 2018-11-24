module.exports = function(app){	
	app.get('/',function(req, res){
		res.status(200).send({ style: "Home" });
	});

	app.post('/',function(req, res){

		var notas = req.body;
		for(i in notas){
			console.log("ID: " + notas[i].id + " Nota: " + notas[i].nota);
		}
		res.status(200).send({ req : req.body });
	});
}