var app = require('./config/server');

var login = require('./app/routes/auth/login')(app);

var homeRouter = require('./app/routes/homeRouter')(app);

//Rotas Professor
var professorRouter = require('./app/routes/professor/professorRouter')(app);
var idProfessorRouter = require('./app/routes/professor/idProfessorRouter')(app);
var deletaProfessorRouter = require('./app/routes/professor/deletaProfessorRouter')(app);
var insereProfessorRouter = require('./app/routes/professor/insereProfessorRouter')(app);
var editaProfessorRouter = require('./app/routes/professor/editaProfessorRouter')(app);

//Rotas Aluno
var alunoRouter = require('./app/routes/aluno/alunoRouter')(app);
var idAlunoRouter = require('./app/routes/aluno/idAlunoRouter')(app);
var deletaAlunoRouter = require('./app/routes/aluno/deletaAlunoRouter')(app);
var insereAlunoRouter = require('./app/routes/aluno/insereAlunoRouter')(app);
var editaAlunoRouter = require('./app/routes/aluno/editaAlunoRouter')(app);

//Rotas Serie
var serieRouter = require('./app/routes/serie/serieRouter')(app);
var idSerieRouter = require('./app/routes/serie/idSerieRouter')(app);
var deletaSerieRouter = require('./app/routes/serie/deletaSerieRouter')(app);
var insereSerieRouter = require('./app/routes/serie/insereSerieRouter')(app);
var editaSerieRouter = require('./app/routes/serie/editaSerieRouter')(app);

//Rotas Turma
var turmaRouter = require('./app/routes/turma/turmaRouter')(app);
var idTurmaRouter = require('./app/routes/turma/idTurmaRouter')(app);
var deletaTurmaRouter = require('./app/routes/turma/deletaTurmaRouter')(app);
var insereTurmaRouter = require('./app/routes/turma/insereTurmaRouter')(app);
var editaTurmaRouter = require('./app/routes/turma/editaTurmaRouter')(app);

//Rotas Aviso
var avisoRouter = require('./app/routes/aviso/avisoRouter')(app);
var idAvisoRouter = require('./app/routes/aviso/idAvisoRouter')(app);
var deletaAvisoRouter = require('./app/routes/aviso/deletaAvisoRouter')(app);
var insereAvisoRouter = require('./app/routes/aviso/insereAvisoRouter')(app);
var editaAvisoRouter = require('./app/routes/aviso/editaAvisoRouter')(app);

//Rotas Disciplina
var disciplinaRouter = require('./app/routes/disciplina/disciplinaRouter')(app);
var idDisciplinaRouter = require('./app/routes/disciplina/idDisciplinaRouter')(app);
var deletaDisciplinaRouter = require('./app/routes/disciplina/deletaDisciplinaRouter')(app);
var insereDisciplinaRouter = require('./app/routes/disciplina/insereDisciplinaRouter')(app);
var editaDisciplinaRouter = require('./app/routes/disciplina/editaDisciplinaRouter')(app);

//Rotas Frequencia
var frequenciaRouter = require('./app/routes/frequencia/frequenciaRouter')(app);
var idFrequenciaRouter = require('./app/routes/frequencia/idFrequenciaRouter')(app);
var deletaFrequenciaRouter = require('./app/routes/frequencia/deletaFrequenciaRouter')(app);
var insereFrequenciaRouter = require('./app/routes/frequencia/insereFrequenciaRouter')(app);
var editaFrequenciaRouter = require('./app/routes/frequencia/editaFrequenciaRouter')(app);

//Rotas registroFrequencia
//var regFrequenciaRouter = require('./app/routes/registroFrequencia/registroFrequenciaRouter')(app);
//var idRegFrequenciaRouter = require('./app/routes/registroFrequencia/idRegistroFrequenciaRouter')(app);
//var deletaRegFrequenciaRouter = require('./app/routes/registroFrequencia/deletaRegistroFrequenciaRouter')(app);
//var insereRegFrequenciaRouter = require('./app/routes/registroFrequencia/insereRegistroFrequenciaRouter')(app);
//var editaRegFrequenciaRouter = require('./app/routes/registroFrequencia/editaRegistroFrequenciaRouter')(app);


//Rotas professor_disciplina_turma
var pdtRouter = require('./app/routes/pdt/pdtRouter')(app);
var idPdtRouter = require('./app/routes/pdt/idPdtRouter')(app);
var deletaPdtRouter = require('./app/routes/pdt/deletaPdtRouter')(app);
var inserePdtRouter = require('./app/routes/pdt/inserePdtRouter')(app);
var editaPdtRouter = require('./app/routes/pdt/editaPdtRouter')(app);

//Rotas turmaFechada
var TFRouter = require('./app/routes/turmaFechada/TFRouter')(app);
var idTFRouter = require('./app/routes/turmaFechada/idTFRouter')(app);
var deletaTFRouter = require('./app/routes/turmaFechada/deletaTFRouter')(app);
var insereTFRouter = require('./app/routes/turmaFechada/insereTFRouter')(app);
var editaTFRouter = require('./app/routes/turmaFechada/editaTFRouter')(app);

//Rotas Horario
var HorarioRouter = require('./app/routes/horario/HorarioRouter')(app);
var idHorarioRouter = require('./app/routes/horario/idHorarioRouter')(app);
var deletaHorarioRouter = require('./app/routes/horario/deletaHorarioRouter')(app);
var insereHorarioRouter = require('./app/routes/horario/insereHorarioRouter')(app);
var editaHorarioRouter = require('./app/routes/horario/editaHorarioRouter')(app);

app.listen(3000, function(){
	console.log("servidor rodando na porta 3000");
});