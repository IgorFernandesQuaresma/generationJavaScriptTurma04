
-- Criamos o banco de dados
create database db_generation_game_online;

use db_generation_game_online;

CREATE TABLE tb_personagens(
	id bigint AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
    ataque int not null,
    defesa int not null
    
);

alter table tb_personagens add raca VARCHAR (255) NOT NULL;
alter table tb_personagens add classe_id bigint;

select * from tb_personagens;

INSERT INTO tb_personagens (nome, ataque, defesa, raca)
VALUES ("Terror", 500, 300, "Humano" );

INSERT INTO tb_personagens (nome, ataque, defesa, raca)
VALUES ("Foguin", 700, 100, "Humano" );

INSERT INTO tb_personagens (nome, ataque, defesa, raca)
VALUES ("Legolas", 300, 300, "Elfo" );

INSERT INTO tb_personagens (nome, ataque, defesa, raca)
VALUES ("Ragnar", 700, 300, "Anão" );

INSERT INTO tb_personagens (nome, ataque, defesa, raca, classe_id)
VALUES ("Tste", 1500, 800, "Anão", 4 );

INSERT INTO tb_personagens (nome, ataque, defesa, raca, classe_id)
VALUES ("Cabo acriatividade", 700, 300, "Anão", 4 );

INSERT INTO tb_personagens (nome, ataque, defesa, raca, classe_id)
VALUES ("Pediu 8", 700, 300, "Anão", 4 );

INSERT INTO tb_personagens (nome, ataque, defesa, raca, classe_id)
VALUES ("Vamo ae", 2000, 1300, "Anão", 4 );

UPDATE tb_personagens SET nome = "Terror" WHERE id = 1;

CREATE TABLE tb_classes(
	id bigint AUTO_INCREMENT PRIMARY KEY,
	classe VARCHAR(255) NOT NULL
);

select * from tb_classes;

INSERT INTO tb_classes (classe)
VALUES ("Guerreiro/a"),
("Mago/a"),
("Arqueiro/a"),
("Barbaro/a");

alter table tb_personagens add constraint fk_personagens_classes
FOREIGN KEY (classe_id) REFERENCES tb_classes(id);

UPDATE tb_personagens SET classe_id = 1 WHERE id = 1;
UPDATE tb_personagens SET classe_id = 2 WHERE id = 2;
UPDATE tb_personagens SET classe_id = 3 WHERE id = 3;
UPDATE tb_personagens SET classe_id = 4 WHERE id = 4;


SELECT * FROM tb_personagens WHERE ataque < 2000.00;
SELECT * FROM tb_personagens WHERE defesa > 1000.00 and defesa < 2000.00;
SELECT * FROM tb_personagens WHERE nome LIKE '%c%';

SELECT nome, ataque, defesa, raca, tb_classes.classe
FROM tb_personagens INNER JOIN tb_classes 
ON tb_personagens.classe_id = tb_classes.id;

SELECT nome, ataque, defesa, raca, tb_classes.classe
FROM tb_personagens INNER JOIN tb_classes 
ON tb_personagens.classe_id = tb_classes.id where classe = "Barbaro/a";


SELECT nome, ataque, defesa, raca, tb_classes.classe
FROM tb_personagens INNER JOIN tb_classes 
ON tb_personagens.classe_id = tb_classes.id like classe = '%Barbaro/a%';
















 




