let defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = 2;

const originValue = {
  Brazil: 8,
};

const getOriginValue = (origin) => originValue[origin] || 7;

const plantNeedsSun = (plant) => plant.needsSun;

const createWaterFrquency = (needsSun, size, origin) => needsSun
  ? size * 0.77 + getOriginValue(origin)
  : (size / 2) * 1.33 + getOriginValue(origin);

const initPlant = (id, breed, needsSun, origin, specialCare, size, makeWaterFrequency = createWaterFrquency) => {
  const waterFrequency = makeWaterFrequency(needsSun, size, origin);
  return {
    id, breed, needsSun, origin, specialCare: { waterFrequency, ...specialCare }, size,
  };
};

const getCreatedPlantsQuantity = () => createdPlants;

const createNewPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const mappedPlant = initPlant(id, breed, needsSun, origin, specialCare, size);
  createdPlants = defaultPlants.push(mappedPlant);
  return mappedPlant;
};

const getPlants = () => defaultPlants;

const getPlantById = (id) => (defaultPlants.filter((plant) => plant.id === id) || [])[0];

const editPlant = (plantId, newPlant) =>
  defaultPlants = defaultPlants.map((plant) => plant.id === parseInt(plantId) ? newPlant : plant);

const removePlantById = (id) =>
  defaultPlants = defaultPlants.filter((plant) => plant.id !== parseInt(id));

module.exports = {
  createNewPlant,
  createdPlants,
  getPlants,
  getPlantById,
  editPlant,
  removePlantById,
  getCreatedPlantsQuantity,
  plantNeedsSun,
};
