# Pw2

> resposta em solutions.txt

## Exercícios do dia 30/2 da Trybe

### Exercício 1

  Crie uma API simples que retorne uma mensagem. Feito isso, gerencie seus processos da seguinte maneira

* Crie UM processo no PM2 utilizando o CLI;
* Restart e recarregue o processo utilizando o CLI do PM2 (lembre-se que há comandos distintos para cada um);
* Pare o processo;
* (Bônus) - Escalone para mais 5 processos;
* (Bônus) - Defina para 3 a quantidade de processos;
* Remova o processo da listagem do PM2;

### Exercício 2

  Crie um arquivo ecosystem. O arquivo configurará o PM2 para

* Observar alterações no diretório da aplicação e, caso ocorram, reiniciar automaticamente sua aplicação;
* Escalonar o número de processos para a quantidade de cores de sua máquina;
* Reiniciar o processo sempre que o ele alcançar o consumo de 100MB de memória.

### Exercício 3

  Explorando variáveis de ambiente

* Adicione à API o uso de uma variável de ambiente que altere a mensagem exibida em sua resposta ou outro comportamento que preferir;
* Adicione ao arquivo ecosystem do exercício anterior dois contextos de variáveis: env_prod e env_homolog.
* Execute o processo utilizando o contexto prod. Em seguida, execute o processo utilizando o contexto homolog. Valide se o comportamento foi alterado.

### Exercício 4

  Adicione monitoramento à sua API

* Crie uma conta no PM2;
* Adicione o monitoramento à API dos exercícios anteriores, utilizando o comando do CLI do PM2;
* Verifique se o dashboard web está exibindo as informações de sua API.

## Bônus

### Exercício 5

  Adicione à API criada um endpoint que simule um erro de produção. Para isso, pode ser utilizado o comando process.exit. O objetivo é fazer com que o processo pare e então o PM2 entre em ação para restartá-lo.

### Exercício 6

  Adicione mais de um processo a ser iniciado pelo seu arquivo ecosystem. Para isso, pode se adicionar dois processos com comportamentos diferentes, através do mesmo código fonte, ou adicionar mais uma API ou script ao projeto. A ideia é, ao executar utilizando o ecosystem, o PM2 suba processos com nomes e características diferentes.

### Exercício 7

  Execute sua API utilizando o runtime do PM2. Para isso:

* Adicione o módulo do pm2 às dependências do projeto;
* Altere o script de start do seu app (package.json) para utilizar o runtime do pm2. Lembre-se de referenciar seu arquivo ecosystem;
* Execute o script através do npm ou yarn.
