// Utilizando o mongoimport, importe o arquivo books.json para a sua instância local do MongoDB e utilize a coleção books para construir queries para as seguintes questões:

/* Oarquivo está nesse diretório como books.json e foi retirado do link
  https://course.betrybe.com/back-end/mongodb/books.json */


// 7.Retorne a quantidade de documentos da coleção books.

db.books.count();

// 8.Conte quantos livros existem com o status "PUBLISH".

db.books.find({ status: "PUBLISH" }).count();
/* A string é case sensitive */

// 9.Exiba os campos title, isbn e pageCount dos 3 primeiros livros. NÃO retorne o campo _id.

db.books.find({}, { _id: 0, title: 1, isbn: 1, pageCount: 1 }).limit(3);

// 10.Pule 5 documentos e exiba os campos _id, title, authors e status do livros com status "MEAP", limitando a 10 documentos.
db.books.find({ status: "MEAP" }, { title: 1, authors: 1, status: 1 }).skip(5).limit(10);
