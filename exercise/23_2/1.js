// DataBase retirada do link https://course.betrybe.com/back-end/mongodb/superheroes.json e incorporada com mongo import, arquivo nesse diretório

coll = db.superheros;

// 1.Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido
coll.find()

// 2.Selecione todos os super-heróis menores do que 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.
coll.find({ "aspects.height": { $lt: 180 } });

// 3. Retorne o total de super-heróis menores que 1.80m.
coll.find({ "aspects.height": { $lt: 180 } }).count(); // 421

// 4. Retorne o total de super-heróis com até 1.80m.
coll.find({ "aspects.height": { $lte: 180 } }).count(); // 459

// 5. Selecione um super-herói com 2.00m ou mais de altura.
coll.find({ "aspects.height": { $gte: 200 } });

// 6. Retorne o total de super-heróis com 2.00m ou mais.
coll.find({ "aspects.height": { $gte: 200 } }).count(); // 59

// 7. Selecione todos os super-heróis que têm olhos verdes.
coll.find({ "aspects.eyeColor": "green" });

// 8. Retorne o total de super-heróis com olhos azuis.
coll.find({ "aspects.eyeColor": "blue" }).count(); // 225

// 9. Utilizando o operador $in, selecione todos os super-heróis com cabelos pretos ou carecas ("No Hair").
coll.find({ "aspects.hairColor": { $in: ['black', 'No Hair', 'Black'] } });

// 10. Retorne o total de super-heróis com cabelos pretos ou carecas ("No Hair").
coll.find({ "aspects.hairColor": { $in: ['black', 'No Hair', 'Black'] } }).count(); // 236

// 11. Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
coll.find({ "aspects.hairColor": { $nin: ['black', 'No Hair', 'Black' ] }}).count(); // 498

// 12. Utilizando o operador $not, retorne o total de super-heróis que não tenham mais de 1.80m de altura.
coll.find({ "aspects.height": { $not: { $gt: 180 } } });

// 13. Selecione todos os super-heróis que não sejam humanos e não sejam maiores do que 1.80m.
coll.find({ $and: [
  { "race": { $nor: ["human", "Human"] } },
  { race: { $exists: true } },
  { "aspects.height": { $lte: 180 } }
] });

// 14. Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.

// 15. Selecione todos os super-heróis que pesem entre 80kg e 100kg, sejam Humanos ou Mutantes, e não sejam publicados pela DC Comics.

// 16. Retorne o total de documentos que não contêm o campo race.

// 17. Retorne o total de documentos que contêm o campo hairColor.

// 18. Remova apenas um documento publicado pela Sony Pictures.

// 19. Remova todos os documentos publicados pelo George Lucas.