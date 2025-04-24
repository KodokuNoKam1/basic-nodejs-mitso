const express = require('express');
const router = express.Router();
const Product = require('./product.model');
const productsService = require('./product.service');

router.route('/')
  .get(async (req, res) => {
    const products = await productsService.getAll();
    res.json(products.map(Product.toResponse));
  })
  .post(async (req, res) => {
    const product = await productsService.create(req.body);
    res.status(201).json(Product.toResponse(product));
  });

router.route('/:id')
  .get(async (req, res) => {
    const product = await productsService.getById(req.params.id);
    if (product) {
      res.json(Product.toResponse(product));
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  })
  .put(async (req, res) => {
    const updatedProduct = await productsService.updateById(req.params.id, req.body);
    if (updatedProduct) {
      res.json(Product.toResponse(updatedProduct));
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  })
  .delete(async (req, res) => {
    const deletedProduct = await productsService.deleteById(req.params.id);
    if (deletedProduct) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  });

module.exports = router;
