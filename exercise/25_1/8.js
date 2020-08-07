// Descubra quais são os 5 clientes que gastaram o maior valor.

// { $lookup: {

// } },
db.vendas.aggregate([
  { $match: {
    status: { $not: /AGUARDANDO PAGAMENTO/ }
  } },
  { $group: {
    _id: "$clienteId",
    total: { $sum: "$valorTotal" }
  } },
  { $sort: { total: -1 } },
  { $limit: 5 },
  { $lookup: {
    from: "clientes",
    localField: "_id",
    foreignField: "clienteId",
    as: "compras"
  } },
  { $project: {
    nome: "$compras.nome"
  } }
]).pretty();
