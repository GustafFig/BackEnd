Exercício 1: Crie uma função que retorna uma promise:

* Essa função deve receber 3 parâmetros, fazendo o tratamento de erro caso algum dos parâmetros não seja um número.
* Caso algum dos parâmetros não seja do tipo Number rejeite a promise e imprima na tela a frase "Digite apenas números".
* Caso todos os parâmetros sejam do tipo Number você deve somar os dois primeiros.
* Depois pegue o resultado da soma e multiplique pelo terceiro parâmetro e caso seja menor que 50, rejeite a promise com a mensagem "Valor muito baixo".
* Caso contrário, aceite a promise imprimindo o resultado da multiplicação na tela.


Exercício 2: Agora, pegue a função do exercício 1 e refatore ela para async/await.

* Sua função tem que funcionar exatamente igual a do exercício 1, mas você não pode utilizar nenhum .then em seu código.
Para cada exercício abaixo, escreva o script primeiro utilizando callbacks, depois promises e, por último, async/await.

Exercício 3: Crie um script que, sem utilizar módulos de terceiros:

* Pergunte ao usuário qual arquivo deseja ler.

* Leia o arquivo indicado (Não se esqueça de realizar tratamento de erros caso o usuário informe um arquivo que não existe).

* Escreva na tela o conteúdo do arquivo e a quantidade de bytes.

Exercício 4: Crie um script que, sem utilizar módulos de terceiros, substitua uma palavra por outra em um arquivo escolhido pelo usuário com o seguinte fluxo:

* Perguntar ao usuário qual arquivo deseja utilizar.

* Ler o arquivo (Não se esqueça de realizar tratamento de erros caso o usuário informe um arquivo que não exista).

* Solicitar a palavra a ser substituída.

* Solicitar a nova palavra, que deve substituir a palavra anterior.

* Mostrar o novo conteúdo do arquivo e realizar a substituição.

* Perguntar o nome do arquivo de destino.

* Salvar o novo arquivo no caminho de destino (Caso o usuário informe um arquivo já existente, confirmar antes de sobrescrever).

**Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com replace(new RegExp(palavra, 'g'), novaPalavra).**
