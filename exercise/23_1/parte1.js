// Coleção bios veio do site https://docs.mongodb.com/manual/reference/bios-example-collection/
// Utilizando a coleção bios, construa queries para retornar os seguintes itens:
// O comando pretty na maioria dos comandos é apenas para é apenas para vizualização

// 1.Retorne o documento com _id igual a 8.

db.bios.find({ _id: 8 }).pretty();

// 2.Retorne o documento com _id igual a 8, mas só exiba os campos: _id e name.

db.bios.find({ _id: 8 }, { name: 1 }).pretty();

// 3.Retorne apenas os campos name e birth do documento com _id igual a 8.

db.bios.find({ _id: 8 }, { birth: 1, name: 1, _id: 0 }).pretty();
/* nesse caso o id deve ser específicado na projeção, pois seu default nesse campo de find é 1(aparecer) */

// 4.Retorne todos os documentos em que o campo name.first seja igual a John, utilizando o método pretty().

db.bios.find({ "name.first": "John" }).pretty();

// 5.Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty().

db.bios.find({}).limit(3).pretty();
/* db.bios.find({}).pretty().limit(3);*/

// 6.Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.

db.bios.find().skip(5).limit(2);
