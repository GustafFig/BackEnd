const express = require('express');
const bodyParser = require('body-parser');
const { plantsRouter, sunnyPlantsRouter, allPlantsRouter } = require('./plants');

function start() {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/plant', plantsRouter)
  app.use('/sunny', sunnyPlantsRouter);
  app.use('/plants', allPlantsRouter);

  const { PORT = 3000 } = process.env;

  return [app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`)), app];
}

start();
