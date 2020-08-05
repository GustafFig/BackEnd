// Retorne os filmes da categoria adventure e com ratings maior do que 103, exibindo apenas os campos title, ratings e category.

db.movies.find(
  {
    category: { $all: ['adventure'] },
    ratings: { $elemMatch: { $gt: 103 } }
  },
  { title: true, ratings: true, _id: false, category: true }
);
