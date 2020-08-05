// Retorne somente o título de todos os filmes com dois elementos no array category.

db.movies.find(
  { category: { $size: 2 } },
  { title: true, _id: false }
);
