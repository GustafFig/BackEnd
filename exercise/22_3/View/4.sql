-- Crie uma view chamada movies_languages, usando as tabelas film e language do banco de dados sakila. Sua view deve exibir o título do filme, o id do idioma e o idioma do filme, como na imagem a seguir.

USE sakila;

CREATE VIEW movies_languages AS
SELECT
film.title,
film.language_id,
language.name
FROM sakila.film AS film
INNER JOIN sakila.language AS language
ON language.language_id = film.language_id;
