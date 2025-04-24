import express from 'express';
import { Order } from './order.model';
import * as ordersService from './order.service';
const router = express.Router();
router
    .route('/:id')
    .get(async (req, res) => {
    const orderId = req.params['id'];
    if (!orderId) {
        res.status(400).send({ message: 'Invalid order ID' });
        return;
    }
    const order = await ordersService.getById(orderId);
    if (order) {
        res.json(Order.toResponse(order));
    }
    else {
        res.status(404).send({ message: 'Order not found' });
    }
});
export default router;
//# sourceMappingURL=order.router.js.map