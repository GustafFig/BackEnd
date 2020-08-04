// Exercício 19: Em apenas uma query adicione o campo area com o seguinte array como valor: [ "Students Room" ] a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.

db.xmen.updateMany(
  { $or: [
    {
      "occupation": "Senior Staff",
      "power": { $gt: 100 }
    },
    {
      "occupation": "Junior Staff",
      "power": 200
    }
  ]},
  {
    $set: { "area": [ "Students Room" ] },
    $currentDate: { "lastUpdate": { $type: "timestamp" } }
  }
);
