// Exercício 2: Altere budget para 1 no filme Godzilla.

db.movies.updateOne(
  { "title": "Godzilla" },
  { $set: { "budget": 1 } },
);

// antes não existia budget nesse filme, agora ira existir com o valor 1
