-- Crie uma view chamada film_info utilizando as tabelas actor, film_actor e film do banco de dados sakila. Sua view deve exibir o actor_id, o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

USE sakila;

CREATE VIEW film_info AS
SELECT
actor_id,
CONCAT(actor.first_name, ' ', actor.last_name) AS `actor`,
film.title
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS filmActor
ON actor.actor_id = filmActor.actor_id
INNER JOIN sakila.film AS film
ON film.film_id = filmActor.film_id
ORDER BY `actor`;
