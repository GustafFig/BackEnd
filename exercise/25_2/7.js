// Exercício 7: Para esses clientes, adicione um campo chamado compras.valorComDesconto em todas as compras do período, aplicando 10% de desconto sobre o valor total da compra (valorTotal).

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
]);
