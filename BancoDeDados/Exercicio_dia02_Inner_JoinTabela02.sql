
-- Criamos o banco de dados
create database db_sucos;

-- Selecionamos a tabela para usar
use db_rh;

-- Creiamos uma tabela
create table tb_produtos(
id bigint auto_increment,
nome varchar (255) not null,
quantidade Int,
dataValidade date,
preco decimal(6,2) not null,
primary key (id)
);	

-- selecionando na tabela
select * from tb_produtos;	

-- Inserindo itens na tabela
insert into tb_produtos(nome,quantidade, dataValidade, preco) values ("Suco de amora", 10, '2025-11-01', 13.90);
insert into tb_produtos(nome,quantidade, dataValidade, preco) values ("Suco de abacaxi", 12, '2025-11-01', 15.90);
insert into tb_produtos(nome,quantidade, dataValidade, preco) values ("Suco de banana", 13, '2025-11-01', 12.90);
insert into tb_produtos(nome,quantidade, dataValidade, preco) values ("Suco de morango", 11, '2025-11-01', 12.90);

-- ALTER TABLE - MODIFY

alter table tb_produtos modify preco decimal (6,2);

create table tb_funcionarios(
id bigint auto_increment,
nome varchar (255) not null,
salario decimal (6,2),
dataDeInicio date,
primary key (id)
);	

insert into tb_funcionarios(nome, salario, dataDeInicio) values ("Igor", 8000.00, '2024-11-01');
insert into tb_funcionarios(nome, salario, dataDeInicio) values ("Zezinho da padaria", 1500.00, '2024-11-01');
insert into tb_funcionarios(nome, salario, dataDeInicio) values ("Ze lagosta", 3500.00, '2024-11-01');
insert into tb_funcionarios(nome, salario, dataDeInicio) values ("Tião do gas", 2000.00, '2024-11-01');
insert into tb_funcionarios(nome, salario, dataDeInicio) values ("João Leiteiro", 1450.00, '2024-11-01');

select * from tb_funcionarios;	

SELECT * FROM tb_funcionarios WHERE salario < 2000.00 and salario > 1450.00;

UPDATE tb_funcionarios set salario = 2500.90 where id = 5;

use db_sucos;

create table tb_categorias(
id bigint auto_increment,
categoria varchar (255) not null,
primary key (id)
);	

select * from tb_categorias;	

INSERT INTO tb_categorias(categoria)
VALUES ("Suco de fruta");

INSERT INTO tb_categorias(categoria)
VALUES ("Suco com Leite");

INSERT INTO tb_categorias(categoria)
VALUES ("Suco especial");



 




