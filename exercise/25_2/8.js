// Exercício 8: Ainda nesse pipeline, descubra os 5 estados com mais compras.

db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { 
      $divide: [
        { $subtract: ["$$NOW", "$dataNascimento"] },
        milissegundos
      ]
    } }
  } },
  { $lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
  } },
  { $match: {
    "compras.dataVenda": { $gte: ISODate("2019-06-01"), $lte: ISODate("2019-03-31") }
  } },
  { $addFields: {
    totalCompras: { $size: "$compras" }
  } },
  { $sort: { totalCompras: -1 } },
  { $limit: 10 },
  { $unwind: "$compras" },
  { $addFields: {
    "compras.valorComDesconto": { $multiply: ["$valorTotal", 0.9] }
  } },
  { $group: {
    _id: "$endereco.uf",
    totalComprasUF: { $sum: "$totalCompras" }
  } },
  { $sort: { totalComprasUF: -1 } },
  { $limit: 5 }
]);
