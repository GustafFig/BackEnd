-- Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila) adicionando-o na coluna name. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE FULLTEXT INDEX fulltext_category ON sakila.category (name);

SELECT * FROM sakila.category
WHERE MATCH (name) AGAINST ('Action');
-- query cost = 0.35

DROP FULLTEXT INDEX fulltext_category ON sakila.category;

SELECT * FROM sakila.category
WHERE name LIKE 'Action';
-- query cost = 1.85
