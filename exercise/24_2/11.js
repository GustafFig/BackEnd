// Exercício 11: Produza três querys para o filme Batman onde:

// Adicione o campo actor com o valor Christian Bale ao array de cast em que o campo actor seja igual a Batman;
// Adicione o campo actor com o valor Michael Caine ao array de cast em que o campo actor seja igual a Alfred;
// Adicione o campo actor com o valor Heath Ledger ao array de cast em que o campo actor seja igual a Coringa;

db.movies.updateOne(
  { "title": "Batman", "cast.character": "Batman" },
  { $set: { "cast.$.actor": "Christian Bale" } }
);
db.movies.updateOne(
  { "title": "Batman", "cast.character": "Alfred" },
  { $set: { "cast.$.actor": "Michael Caine" } }
);
db.movies.updateOne(
  { "title": "Batman", "cast.character": "Coringa" },
  { $set: { "cast.$.actor": "Heath Ledger" } }
);
