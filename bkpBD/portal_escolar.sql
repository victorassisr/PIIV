-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 11-Nov-2018 às 18:31
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
DROP DATABASE IF EXISTS `portal_escolar`;
CREATE DATABASE IF NOT EXISTS `portal_escolar` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `portal_escolar`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

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
(3, 'Paula Dias', '1989-04-15', 2, 1, 2006);

-- --------------------------------------------------------

--
-- Estrutura da tabela `aviso`
--

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
-- Estrutura da tabela `disciplina`
--

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

CREATE TABLE `frequencia` (
  `idFrequencia` int(11) NOT NULL,
  `idTurmaFechada` int(11) NOT NULL,
  `matricula` int(11) NOT NULL,
  `dataRegistro` date NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

CREATE TABLE `login` (
  `email` varchar(100) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `idTipo` tinyint(4) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `login`
--

INSERT INTO `login` (`email`, `senha`, `idTipo`, `idUser`) VALUES
('victor@email.com', '12345678', 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `professor`
--

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
(6, 'Marcos Antonio de Moraes', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12'),
(7, 'Marcos Antonio de Moraes', 9876543210, '1994-11-17', '2005-04-07', '2007-05-12'),
(8, 'Marcos Antonio da Silva', 0, '1994-11-17', '2005-04-07', '0000-00-00'),
(9, 'Marcos Antonio da Silva', 0, '1994-11-17', '2005-04-07', '2007-06-12'),
(10, 'Marcos Antonio de Moraes', 11427845689, '1994-11-17', '2005-04-07', '2007-06-12'),
(11, 'Marcos Antonio de Moraes', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12'),
(12, 'Marcos Antonio de Moraes', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12'),
(13, 'Marcos Antonio de Moraes', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12'),
(14, 'Marcos Antonio de Moraes', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12'),
(15, 'Marcos Antonio de Moraes', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12'),
(16, 'Marcos Antonio teste', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12'),
(17, 'Marcos Antonio teste', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12'),
(18, 'Marcos Antonio teste', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12'),
(19, 'Marcos Antonio teste', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12'),
(20, 'Marcos Antonio teste', 11427845690, '1994-11-17', '2005-04-07', '2007-05-12');

-- --------------------------------------------------------

--
-- Estrutura da tabela `serie`
--

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

CREATE TABLE `tipocadastro` (
  `id` tinyint(4) NOT NULL,
  `descricao` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `turma`
--

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

CREATE TABLE `turmafechada` (
  `idTurmaFechada` int(11) NOT NULL,
  `idSerie` int(11) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `dataInicial` date NOT NULL,
  `dataFinal` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`matricula`);

--
-- Indexes for table `aviso`
--
ALTER TABLE `aviso`
  ADD PRIMARY KEY (`idNoticia`);

--
-- Indexes for table `disciplina`
--
ALTER TABLE `disciplina`
  ADD PRIMARY KEY (`idDisciplina`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `professor`
--
ALTER TABLE `professor`
  ADD PRIMARY KEY (`idProfessor`);

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
  MODIFY `matricula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `aviso`
--
ALTER TABLE `aviso`
  MODIFY `idNoticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `disciplina`
--
ALTER TABLE `disciplina`
  MODIFY `idDisciplina` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `professor`
--
ALTER TABLE `professor`
  MODIFY `idProfessor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
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
-- AUTO_INCREMENT for table `turma`
--
ALTER TABLE `turma`
  MODIFY `idTurma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `turmafechada`
--
ALTER TABLE `turmafechada`
  MODIFY `idTurmaFechada` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
