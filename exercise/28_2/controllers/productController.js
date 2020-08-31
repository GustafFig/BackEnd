const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', (_req, res) => {
  const products = new ProductModel().getAll();

  res.status(200).json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = new ProductModel().getById(id);

  res.json(product);
});

router.post('/', (req, res) => {
  const { name, brand } = req.body;

  const newProduct = new ProductModel(name, brand);
  newProduct.add();

  res.json(newProduct);
});

router.delete('/:id', (req, res) => {
  const products = new ProductModel().delete(req.params.id);

  res.json(products);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  const products = new ProductModel(name, brand).addOrUpdate(id);

  res.json(products);
});

module.exports = router;
