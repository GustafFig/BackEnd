# Multer e multi-form data

## Exercicio do dia 29_2 da Trybe

### Exercicio 1

Crie um endpoint na API usada durante a aula que receba um texto no body da requisição e escreva esse texto em forma de arquivo.

### Exercicio 2

Crie um endpoint na API usada durante a aula que receba o nome de um arquivo, leia o arquivo da pasta e devolva o texto em forma de json.

### Exercicio 3

Crie um servidor com Multer que possa receber um arquivo do tipo (.png ou .jpg), após isso crie um script que leia uma imagem local e faça o upload para o servidor salvando essa imagem na pasta uploads.

### Exercicio 4

Crie um servidor com Multer que receba múltiplos arquivos, e retorne, como JSON, o novo nome gerado pelo multer para cada arquivo.

### Exercicio 5

Utilizando o método fs.readdir, crie um endpoint no servidor do exercício anterior que retorna, num array como JSON, links para todos os arquivos da pasta uploads e que permita o download desses arquivos quando os links forem acessados.

### Exercicio 6

**O JSON deve ter um formato parecido com esse:**

```JSON
{
  "files": [
    "http://localhost:3000/uploads/f9556c41394ad1885b7f6e3d60b7d997",
    "http://localhost:3000/uploads/dbad52b95173c9bd6be6306bb1b87e92",
    "http://localhost:3000/uploads/b786ee16bd1a5cc233cb8edf443590bd",
    "http://localhost:3000/uploads/3ce491ea5f901e9edcd69891ae24e5fa",
    "http://localhost:3000/uploads/9ba8a52e9285c48d43dc63b86d03b869",
    "http://localhost:3000/uploads/09a7bacdbcf8eac74fce614d4f2ce41d",
    "http://localhost:3000/uploads/490c3301fe9c583158e2f5df06bfc9f5",
    "http://localhost:3000/uploads/02c34d63d5af13ee64267dc4e2722177",
    "http://localhost:3000/uploads/793d417883b2e0aaeaa1256a8ad18510",
    "http://localhost:3000/uploads/cfd8756f144f798de1ab17228599bb16",
    "http://localhost:3000/uploads/09950c14c38092752ba7e9e7031f6cdb"
  ]
}
```

## Bônus

### Crie uma API que atenda aos seguintes requisitos

* Ter um endpoint que receba, além do arquivo num campo file, o nome do arquivo num campo fileName.
* Caso o arquivo ou o nome não sejam enviados, a API deve retornar erro com status 422 - UNPROCESSABLE ENTITY.
* Se um arquivo com o nome informado já existir, a API deve retornar erro com status HTTP 409 - CONFLICT.
* Salvar o arquivo na pasta uploads, com o nome enviado no campo fileName.
* Ter um endpoint que mostre a listagem dos arquivos na rota GET /files.
* Ter um endpoint GET /files/:fileName que permita o download dos arquivos.

  **Para salvar o arquivo com o nome enviado na request, você precisará renomear o arquivo criado pelo multer utilizando fs.rename**
