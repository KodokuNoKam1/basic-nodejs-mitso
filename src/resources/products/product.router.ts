import express, { Request, Response, Router } from 'express';
import { Product } from './product.model';
import * as productsService from './product.service';

const router: Router = express.Router();

router
  .route('/:id')
  .get(async (req: Request, res: Response) => {
    const productId = req.params['id'];
    if (!productId) {
      res.status(400).send({ message: 'Invalid product ID' });
      return;
    }
    const product = await productsService.getById(productId);
    if (product) {
      res.json(Product.toResponse(product));
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  })
  .put(async (req: Request, res: Response) => {
    const productId = req.params['id'];
    if (!productId) {
      res.status(400).send({ message: 'Invalid product ID' });
      return;
    }
    const updatedProduct = await productsService.updateById(productId, req.body);
    if (updatedProduct) {
      res.json(Product.toResponse(updatedProduct));
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  });

export default router;