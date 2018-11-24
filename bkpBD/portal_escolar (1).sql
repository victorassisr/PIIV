-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 24-Nov-2018 às 18:05
-- Versão do servidor: 5.7.17-log
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal_escolar`
--
CREATE DATABASE IF NOT EXISTS `portal_escolar` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `portal_escolar`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

DROP TABLE IF EXISTS `aluno`;
CREATE TABLE `aluno` (
  `matricula` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `dataNascimento` date NOT NULL,
  `serie` int(11) NOT NULL,
  `turma` int(11) NOT NULL,
  `ano_letivo` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `aluno`
--

INSERT INTO `aluno` (`matricula`, `nome`, `dataNascimento`, `serie`, `turma`, `ano_letivo`) VALUES
(1, 'Victor Assis', '1994-12-05', 2, 1, 2014),
(2, 'Pedro Augusto', '1997-06-25', 1, 2, 2004),
(3, 'Paula Dias', '1989-04-15', 2, 1, 2006),
(13, 'testeLogindef', '1994-12-05', 2, 1, 2025);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ano`
--

DROP TABLE IF EXISTS `ano`;
CREATE TABLE `ano` (
  `idAno` smallint(6) NOT NULL,
  `ano` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aviso`
--

DROP TABLE IF EXISTS `aviso`;
CREATE TABLE `aviso` (
  `idNoticia` int(11) NOT NULL,
  `titulo` varchar(120) NOT NULL,
  `autor` varchar(120) NOT NULL,
  `corpo` text NOT NULL,
  `dataPostagem` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `aviso`
--

INSERT INTO `aviso` (`idNoticia`, `titulo`, `autor`, `corpo`, `dataPostagem`) VALUES
(1, 'Teste Aviso', 'Victor Assis', 'Este é um teste de um aviso no portal escolar.', '2018-11-10'),
(3, 'Teste Aviso 5555', 'Victor Assis', 'Este é um teste de um aviso no portal escolar. 555', '2018-11-10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `diassemana`
--

DROP TABLE IF EXISTS `diassemana`;
CREATE TABLE `diassemana` (
  `idDia` tinyint(4) NOT NULL,
  `descDia` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `diassemana`
--

INSERT INTO `diassemana` (`idDia`, `descDia`) VALUES
(1, 'Segunda-Feira'),
(2, 'Terça-Feira'),
(3, 'Quarta-Feira'),
(4, 'Quinta-Feira'),
(5, 'Sexta-Feira'),
(6, 'Sabado');

-- --------------------------------------------------------

--
-- Estrutura da tabela `disciplina`
--

DROP TABLE IF EXISTS `disciplina`;
CREATE TABLE `disciplina` (
  `idDisciplina` int(11) NOT NULL,
  `descricao` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `disciplina`
--

INSERT INTO `disciplina` (`idDisciplina`, `descricao`) VALUES
(1, 'Matemática'),
(2, 'Português'),
(3, 'História'),
(4, 'Física'),
(5, 'Química');

-- --------------------------------------------------------

--
-- Estrutura da tabela `frequencia`
--

DROP TABLE IF EXISTS `frequencia`;
CREATE TABLE `frequencia` (
  `idFrequencia` int(11) NOT NULL,
  `idDisciplina` int(11) NOT NULL,
  `idTurmaFechada` int(11) NOT NULL,
  `dataRegistro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `frequencia`
--

INSERT INTO `frequencia` (`idFrequencia`, `idDisciplina`, `idTurmaFechada`, `dataRegistro`) VALUES
(2, 2, 2, '2018-12-10'),
(3, 2, 1, '2018-11-10'),
(4, 3, 1, '2018-11-10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `frequencia_aluno`
--

DROP TABLE IF EXISTS `frequencia_aluno`;
CREATE TABLE `frequencia_aluno` (
  `idAluno` int(11) NOT NULL,
  `idFrequencia` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `horario`
--

DROP TABLE IF EXISTS `horario`;
CREATE TABLE `horario` (
  `idHorario` int(11) NOT NULL,
  `idPDT` int(11) NOT NULL,
  `idDia` int(11) NOT NULL,
  `horario` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `horario`
--

INSERT INTO `horario` (`idHorario`, `idPDT`, `idDia`, `horario`) VALUES
(1, 1, 2, '20:30:00'),
(2, 2, 1, '21:30:00'),
(3, 3, 1, '20:30:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `login` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `idTipoUsuario` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `login`
--

INSERT INTO `login` (`id`, `login`, `senha`, `idTipoUsuario`, `idUsuario`) VALUES
(1, 'admin', 'admin', 3, 0),
(2, 'victor', '123456', 2, 13),
(3, 'professor1', '123456', 1, 21);

-- --------------------------------------------------------

--
-- Estrutura da tabela `professor`
--

DROP TABLE IF EXISTS `professor`;
CREATE TABLE `professor` (
  `idProfessor` int(11) NOT NULL,
  `nome` varchar(120) NOT NULL,
  `cpf` bigint(20) NOT NULL,
  `dataNascimento` date NOT NULL,
  `dataInicioExecucao` date NOT NULL,
  `dataFimExecucao` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `professor`
--

INSERT INTO `professor` (`idProfessor`, `nome`, `cpf`, `dataNascimento`, `dataInicioExecucao`, `dataFimExecucao`) VALUES
(7, 'Marcos Antonio de Moraes', 9876543210, '1994-11-17', '2005-04-07', '2007-05-12'),
(8, 'Marcos Antonio da Silva', 0, '1994-11-17', '2005-04-07', '0000-00-00'),
(9, 'Marcos Antonio da Silva', 0, '1994-11-17', '2005-04-07', '2007-06-12'),
(10, 'Marcos Antonio de Moraes', 11427845630, '1994-11-17', '2005-04-07', '2007-06-12'),
(11, 'Marcos Antonio de Moraes', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12'),
(21, 'Teste Login', 123456789999, '1994-11-17', '2005-04-07', '0000-00-00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `professor_disciplina_turma`
--

DROP TABLE IF EXISTS `professor_disciplina_turma`;
CREATE TABLE `professor_disciplina_turma` (
  `idPDT` int(11) NOT NULL,
  `idPRofessor` int(11) NOT NULL,
  `idDisciplina` int(11) NOT NULL,
  `idTurmaFechada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `professor_disciplina_turma`
--

INSERT INTO `professor_disciplina_turma` (`idPDT`, `idPRofessor`, `idDisciplina`, `idTurmaFechada`) VALUES
(1, 12, 2, 2),
(2, 15, 5, 2),
(3, 16, 5, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `serie`
--

DROP TABLE IF EXISTS `serie`;
CREATE TABLE `serie` (
  `idSerie` int(11) NOT NULL,
  `descSerie` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `serie`
--

INSERT INTO `serie` (`idSerie`, `descSerie`) VALUES
(1, 'Terceiro'),
(2, 'Segundo'),
(4, 'Sétima'),
(5, 'Quinta');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipocadastro`
--

DROP TABLE IF EXISTS `tipocadastro`;
CREATE TABLE `tipocadastro` (
  `id` tinyint(4) NOT NULL,
  `descricao` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipousuario`
--

DROP TABLE IF EXISTS `tipousuario`;
CREATE TABLE `tipousuario` (
  `idTipoUsuario` smallint(6) NOT NULL,
  `descricao` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tipousuario`
--

INSERT INTO `tipousuario` (`idTipoUsuario`, `descricao`) VALUES
(1, 'Professor'),
(2, 'Aluno'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Estrutura da tabela `turma`
--

DROP TABLE IF EXISTS `turma`;
CREATE TABLE `turma` (
  `idTurma` int(11) NOT NULL,
  `descTurma` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `turma`
--

INSERT INTO `turma` (`idTurma`, `descTurma`) VALUES
(1, '301'),
(2, '201'),
(3, '103');

-- --------------------------------------------------------

--
-- Estrutura da tabela `turmafechada`
--

DROP TABLE IF EXISTS `turmafechada`;
CREATE TABLE `turmafechada` (
  `idTurmaFechada` int(11) NOT NULL,
  `idSerie` int(11) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `anoLetivo` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `turmafechada`
--

INSERT INTO `turmafechada` (`idTurmaFechada`, `idSerie`, `idTurma`, `anoLetivo`) VALUES
(1, 2, 2, 2012),
(2, 4, 3, 2013),
(3, 4, 1, 2013),
(4, 1, 1, 2015),
(5, 2, 1, 2015);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`matricula`);

--
-- Indexes for table `ano`
--
ALTER TABLE `ano`
  ADD PRIMARY KEY (`idAno`);

--
-- Indexes for table `aviso`
--
ALTER TABLE `aviso`
  ADD PRIMARY KEY (`idNoticia`);

--
-- Indexes for table `diassemana`
--
ALTER TABLE `diassemana`
  ADD PRIMARY KEY (`idDia`);

--
-- Indexes for table `disciplina`
--
ALTER TABLE `disciplina`
  ADD PRIMARY KEY (`idDisciplina`);

--
-- Indexes for table `frequencia`
--
ALTER TABLE `frequencia`
  ADD PRIMARY KEY (`idFrequencia`);

--
-- Indexes for table `frequencia_aluno`
--
ALTER TABLE `frequencia_aluno`
  ADD PRIMARY KEY (`idAluno`,`idFrequencia`);

--
-- Indexes for table `horario`
--
ALTER TABLE `horario`
  ADD PRIMARY KEY (`idHorario`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `professor`
--
ALTER TABLE `professor`
  ADD PRIMARY KEY (`idProfessor`);

--
-- Indexes for table `professor_disciplina_turma`
--
ALTER TABLE `professor_disciplina_turma`
  ADD PRIMARY KEY (`idPDT`);

--
-- Indexes for table `serie`
--
ALTER TABLE `serie`
  ADD PRIMARY KEY (`idSerie`);

--
-- Indexes for table `tipocadastro`
--
ALTER TABLE `tipocadastro`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipousuario`
--
ALTER TABLE `tipousuario`
  ADD PRIMARY KEY (`idTipoUsuario`);

--
-- Indexes for table `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`idTurma`);

--
-- Indexes for table `turmafechada`
--
ALTER TABLE `turmafechada`
  ADD PRIMARY KEY (`idTurmaFechada`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aluno`
--
ALTER TABLE `aluno`
  MODIFY `matricula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `ano`
--
ALTER TABLE `ano`
  MODIFY `idAno` smallint(6) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `aviso`
--
ALTER TABLE `aviso`
  MODIFY `idNoticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `diassemana`
--
ALTER TABLE `diassemana`
  MODIFY `idDia` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `disciplina`
--
ALTER TABLE `disciplina`
  MODIFY `idDisciplina` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `frequencia`
--
ALTER TABLE `frequencia`
  MODIFY `idFrequencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `horario`
--
ALTER TABLE `horario`
  MODIFY `idHorario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `professor`
--
ALTER TABLE `professor`
  MODIFY `idProfessor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `professor_disciplina_turma`
--
ALTER TABLE `professor_disciplina_turma`
  MODIFY `idPDT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `serie`
--
ALTER TABLE `serie`
  MODIFY `idSerie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tipocadastro`
--
ALTER TABLE `tipocadastro`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tipousuario`
--
ALTER TABLE `tipousuario`
  MODIFY `idTipoUsuario` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `turma`
--
ALTER TABLE `turma`
  MODIFY `idTurma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `turmafechada`
--
ALTER TABLE `turmafechada`
  MODIFY `idTurmaFechada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
