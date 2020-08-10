// Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o o total de clientes.
// Dica: O operador $count pode simplificar sua query.

db.vendas.aggregate([
  { $group: {
    _id: "$clienteId",
    comprasQty: { $sum: 1 }
  } },
  { $match: {
    comprasQty: { $gt: 5 }
  } },
  { $count: "clientes" },
  { $project: { _id: 0 } }
]);
