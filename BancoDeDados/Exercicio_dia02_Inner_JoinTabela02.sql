use db_cidade_dos_vegetais;
use db_generation_game_online;

select * from tb_categoria;	
select * from tb_produtos;	

insert into tb_categoria(categoria,fornecedor) 
values ("Frutas", "Big horto");
insert into tb_categoria(categoria,fornecedor) 
values ("Legumes", "Big horto");
insert into tb_categoria(categoria,fornecedor) 
values ("Folhas", "Big horto");
insert into tb_categoria(categoria,fornecedor) 
values ("Ovos", "Big horto");


insert into tb_produtos(nome, preço, validade, quantidade, tb_categoria_id) 
values ("Abacaxi", 10.00, '2024-06-24', 15, 1);
insert into tb_produtos(nome, preço, validade, quantidade, tb_categoria_id) 
values ("Melao", 8.00, '2024-06-24', 8, 1);
insert into tb_produtos(nome, preço, validade, quantidade, tb_categoria_id) 
values ("Mamao", 12.00, '2024-06-24', 5, 1);
insert into tb_produtos(nome, preço, validade, quantidade, tb_categoria_id) 
values ("Uvas", 11.00, '2024-06-24', 12, 1);
insert into tb_produtos(nome, preço, validade, quantidade, tb_categoria_id) 
values ("Abobora Moranga", 11.00, '2024-06-24', 5, 2);
insert into tb_produtos(nome, preço, validade, quantidade, tb_categoria_id) 
values ("Alface", 11.00, '2024-06-24', 35, 3);
insert into tb_produtos(nome, preço, validade, quantidade, tb_categoria_id) 
values ("Ovos Brancos", 11.00, '2024-06-24', 12, 4);

SELECT * FROM tb_produtos WHERE preço < 10.00;
SELECT * FROM tb_produtos WHERE preço > 7.00 and preço < 10.00;
SELECT * FROM tb_produtos WHERE nome LIKE '%c%';


SELECT nome, preço, validade, quantidade, tb_categoria.categoria
FROM tb_produtos INNER JOIN tb_categoria 
ON tb_produtos.tb_categoria_id = tb_categoria.id;

SELECT nome, preço, validade, quantidade, tb_categoria.categoria
FROM tb_produtos INNER JOIN tb_categoria 
ON tb_produtos.tb_categoria_id = tb_categoria.id WHERE categoria = "folhas";

