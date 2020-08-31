const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', (req, res, next) => {
  const products = new ProductModel().getAll();

  res.send(products);
});

router.get('/get-by-id/:id', (req, res, next) => {
  const product = new ProductModel().getById(req.params.id);

  res.send(product);
});

router.post('/add-user', (req, res) => {
  const { name, brand } = req.body;

  const newProduct = new ProductModel(name, brand);
  newProduct.add();

  res.send(newProduct);
});

router.post('/delete-user/:id', (req, res) => {
  const products = new ProductModel().delete(req.params.id);

  res.send(products);
});

router.post('/update-user/:id', (req, res) => {
  const { name, brand } = req.body;

  const products = new ProductModel(name, brand).addOrUpdate(req.params.id);

  res.send(products);
});

module.exports = router;
