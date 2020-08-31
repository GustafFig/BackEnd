const express = require('express');
const rescue = require('express-rescue');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', rescue(async (_req, res) => {
  const products = await new ProductModel().getAll();

  res.status(200).json(products);
}));

router.get('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const productModel = new ProductModel();
  const product = await productModel.getById(id);

  return res.status(200).json(product);
}));

router.post('/', rescue(async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await new ProductModel(name, brand).add();

  res.status(201).json(newProduct);
}));

router.delete('/:id', rescue(async (req, res) => {
  const products = await new ProductModel().delete(req.params.id);

  res.status(202).json(products);
}));

router.put('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  const products = await new ProductModel(name, brand).addOrUpdate(id);

  if (products.haveBeenAdded) res.status(201).json(products);

  res.status(200).json(products.products);
}));

module.exports = router;
