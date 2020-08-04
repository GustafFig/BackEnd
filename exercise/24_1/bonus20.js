// Exercício 20: Em apenas uma query adicione o campo áreas com [ "outside" ] a todos os Junior Staff que não tenham o campo area definido.

db.xmen.updateMany(
  { "class": "Junior Staff", "area": { $exists: 0 } },
  {
    $set: { "áreas": ["outside"] },
    $currentDate: { "lastUpdate": { $type: "timestamp" } }
  },
);
