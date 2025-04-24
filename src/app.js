import express from 'express';
import bodyParser from 'body-parser';
import clientsRouter from './resources/clients/client.router.js';
import ordersRouter from './resources/orders/order.router.js';
import productsRouter from './resources/products/product.router.js';
import usersRouter from './resources/users/user.router.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Service is running!');
});

// Routers
app.use('/clients', clientsRouter);
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
