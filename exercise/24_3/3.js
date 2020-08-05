// Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105]. 

db.movies.update(
  { title: "Batman" },
  { $push: { ratings: { $each: [85, 100, 102, 105] } } }
);
