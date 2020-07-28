-- Crie uma view chamada film_with_categories utilizando as tabelas category, film_category e film do banco de dados sakila. Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

USE sakila;

CREATE VIEW film_with_categories AS
SELECT
film.title AS "Título",
cat.category_id AS "ID da Categoria",
cat.name AS "Categoria"
FROM sakila.category AS cat
INNER JOIN sakila.film_category AS filmCat
ON filmCat.category_id = cat.category_id
INNER JOIN sakila.film
ON filmCat.film_id = film.film_id
ORDER BY film.title;
