var app = require('./config/server');

var homeRouter = require('./app/routes/homeRouter')(app);

var professorRouter = require('./app/routes/professor/professorRouter')(app);

var idProfessorRouter = require('./app/routes/professor/idProfessorRouter')(app);

var deletaProfessorRouter = require('./app/routes/professor/deletaProfessorRouter')(app);

var insereProfessorRouter = require('./app/routes/professor/insereProfessorRouter')(app);

var editaProfessorRouter = require('./app/routes/professor/editaProfessorRouter')(app);

app.listen(3000, function(){
	console.log("servidor rodando na porta 3000");
});