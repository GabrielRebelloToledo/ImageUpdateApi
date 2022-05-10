CREATE DATABASE node_mysql_crud_db;


CREATE  TABLE IF NOT EXISTS `employees` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `usuario` VARCHAR(500) NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `responsaveis` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `telefone` VARCHAR(50) NOT NULL,
  `sexo` VARCHAR(255) NOT NULL,
  `nascimento` VARCHAR(100) NOT NULL,
  `parentesco` VARCHAR(100) NOT NULL,
  `nivelescola` VARCHAR(100) NOT NULL,
  `turma` VARCHAR(100) NOT NULL,
  `serie` VARCHAR(100) NOT NULL,
  `turno` VARCHAR(100) NOT NULL,
  `credito` DECIMAL(10,2),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE  TABLE IF NOT EXISTS `receitas` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `usuarioId` INTEGER NOT NULL,
  `valor` DECIMAL(10,2),
  `categoria` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(255) NOT NULL,
  `data` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
CREATE  TABLE IF NOT EXISTS `despesas` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `usuarioId` INTEGER NOT NULL,
  `valor` DECIMAL(10,2),
  `categoria` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(255) NOT NULL,
  `data` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE  TABLE IF NOT EXISTS `categorias` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `usuarioId` INTEGER NOT NULL,
  `categoria` VARCHAR(500) NOT NULL,
  `tipo` VARCHAR(500) NOT NULL,

  PRIMARY KEY (`id`))
ENGINE = InnoDB;

/* CREATE TABLE compra(
	`id` BIGINT UNSIGNED AUTO_INCREMENT,
    `nome` VARCHAR(500) NOT NULL,
    `responsaveis` VARCHAR(500) NOT NULL,
    `email` VARCHAR(500) NOT NULL,
    `telefone` VARCHAR(500) NOT NULL,
    `nome_produto` VARCHAR(500) NOT NULL,
    `Quantidade` VARCHAR(500) NOT NULL,
    `preco` VARCHAR(500) NOT NULL,
    PRIMARY KEY (`id`)
) */
CREATE TABLE compra(
	`id` BIGINT UNSIGNED AUTO_INCREMENT,
    `nome` VARCHAR(500) NOT NULL,
    `responsaveis` VARCHAR(500) NOT NULL,
    `email` VARCHAR(500) NOT NULL,
    `telefone` VARCHAR(500) NOT NULL,
    `turma` VARCHAR(500) NOT NULL,
    `nome_produto` VARCHAR(500) NOT NULL,
    `Quantidade` VARCHAR(500) NOT NULL,
    `preco` VARCHAR(500) NOT NULL,
    `entregue` VARCHAR(500) NOT NULL,
    `data` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
)
CREATE TABLE senhaGerada(
	`id` BIGINT UNSIGNED AUTO_INCREMENT,
    `senha` VARCHAR(500) NOT NULL,
    PRIMARY KEY (`id`)
)

CREATE TABLE produtos(
	`id_produto` BIGINT UNSIGNED AUTO_INCREMENT,
	`codigo` VARCHAR(500) NOT NULL,
	`nome_produto` VARCHAR(500) NOT NULL,
	`descricao` VARCHAR(500) NOT NULL,
	`preco` FLOAT,
	`tipo` VARCHAR(500) NOT NULL,
	`saldoInicial` INTEGER,
  PRIMARY KEY (`id_produto`)
)
CREATE TABLE saldoRelatorio(
	`id` BIGINT UNSIGNED AUTO_INCREMENT,
	`nome` VARCHAR(500) NOT NULL,
    `creditoAdd` DECIMAL(10,2),
    `dataCredito` VARCHAR(500) NOT NULL,
    PRIMARY KEY (`id`)
)



INSERT INTO `node_mysql_crud_db`.`employees` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('John', 'Doe', 'johndoe@gmail.com', '1234567890', 'BR Softech Pvt Ltd', 'Full Stack Developer', '500.00', '1', '0', '2019-11-19 03:30:30');
INSERT INTO `node_mysql_crud_db`.`employees` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('Jane', 'Doe', 'janedoe@gmail.com', '9876543210', 'RG Infotech Jaipur', 'PHP Developer', '450.00', '1', '0', '2019-11-19 03:35:30');

CREATE TABLE usuarios(
	`id` BIGINT UNSIGNED AUTO_INCREMENT,
  `usuario` VARCHAR(30) NOT NULL,
	`senha` VARCHAR(100) NOT NULL,
	`perfil` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`)
)
