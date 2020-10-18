const { Router } = require('express')
const Plants = require('./model');

const plantsRouter = Router();
const allPlantsRouter = Router();
const sunnyPlantsRouter = Router();

const addPlant = (req, res) => {
  const id = Plants.getCreatedPlantsQuantity() + 1;
  const { breed, needsSun, origin, specialCare, size } = req.body;
  console.log(breed, needsSun, origin, specialCare, id);
  const plant = Plants.createNewPlant(
    id, breed, needsSun, origin, specialCare, size, Plants.createWaterFrquency
  );
  res.status(200).json(plant);
};

const getPlant = (req, res) => {
  const { id } = req.params;
  const plant = Plants.getPlantById(id);
  res.status(200).json({ plant });
};

const overWritePlnat = (req, res) => {
  const { id } = req.params;
  const { breed, needsSun, origin, specialCare, size } = req.body;

  Plants.editPlant(id, { breed, needsSun, origin, specialCare, size });
  res.status(200).end();
};

const deletePlant = (req, res) => {
  const { id } = req.params;
  Plants.removePlantById(id);
  res.status(200).end();
};

const getSunnyPlant = (req, res) => {
  const { id } = req.params;
  const plant = Plants.getPlantById(id);

  if (!plant || Plants.plantNeedsSun(plant))
    return res.status(404).json({ message: 'No plant sunny Plant with this id' });

  return res.status(200).json({ ...plant });
};

const getAllPlants = (_req, res) => {
  const plants = Plants.getPlants();
  return res.status(200).json(plants);
};

plantsRouter
  .post('/', addPlant)
  .get('/:id', getPlant)
  .post('/:id', overWritePlnat)
  .delete('/:id', deletePlant)

sunnyPlantsRouter
  .get('/:id', getSunnyPlant);

allPlantsRouter
  .get('/', getAllPlants);

module.exports = {
  plantsRouter,
  sunnyPlantsRouter,
  allPlantsRouter,
};
