// Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020.

db.vendas.aggregate([
  { $match: {
    dataVenda: { $gt: ISODate("2020-01-01"), $lt: ISODate("2020-03-31") }
  } },
  { $group: {
    _id: "$clienteId",
    qntCompras: { $sum: 1 }
  } },
  { $match: {
    qntCompras: { $lt: 3 }
  } },
  { $count: "clientes" }
]);
