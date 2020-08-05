// Retorne todos os filmes com ratings entre 64 e 105 e que é divisível por 9, exibindo apenas os campos title e ratings.

db.movies.find(
  { ratings: { $elemMatch: { $gt: 64, $lt: 105, $mod: [9, 0] } } },
  { title: true, ratings: true, _id: false }
);
