// Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019.

db.vendas.aggregate([
  { $match:
    { dataVenda: {
      $gte: ISODate("2019-01-01"),
      $lte: ISODate("2019-12-31")
    } }
  },
  { $group: {
    _id: "$clienteId",
    gasto2019: { $sum: "$valorTotal" }
  } },
  { $sort: { "gasto2019": -1 } },
  { $limit: 10 },
  { $lookup: {
    from: "clientes",
    localField: "_id",
    foreignField: "clienteId",
    as: "clientes"
  } },
  { $project: { nome: "$clientes.nome" } }
]);
