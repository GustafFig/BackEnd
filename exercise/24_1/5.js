// Exercício 5: Aumente em 5 o budget do filme Home Alone.

db.movies.updateOne(
  { "title": "Home Alone" },
  { $inc: { "budget": 5 } },
);

// Novamente não existia, então ele considerou comoo 0
