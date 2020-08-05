// Agora retorne os filmes que contenham action no array category e possuem nota do imdbRating maior do que 7.

db.movies.find(
  {
    category: { $type: "array", $eq: 'action' },
    imdbRating: { $gt: 7 }
  }
);
