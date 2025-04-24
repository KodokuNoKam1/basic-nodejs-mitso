import express from 'express';
import Order from './order.model.js';
import ordersService from './order.service.js';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const orders = await ordersService.getAll();
    res.json(orders.map(Order.toResponse));
  })
  .post(async (req, res) => {
    const order = await ordersService.create(req.body);
    res.status(201).json(Order.toResponse(order));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const order = await ordersService.getById(req.params.id);
    if (order) {
      res.json(Order.toResponse(order));
    } else {
      res.status(404).send({ message: 'Order not found' });
    }
  })
  .put(async (req, res) => {
    const updatedOrder = await ordersService.updateById(req.params.id, req.body);
    if (updatedOrder) {
      res.json(Order.toResponse(updatedOrder));
    } else {
      res.status(404).send({ message: 'Order not found' });
    }
  })
  .delete(async (req, res) => {
    const deletedOrder = await ordersService.deleteById(req.params.id);
    if (deletedOrder) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Order not found' });
    }
  });

export default router;
