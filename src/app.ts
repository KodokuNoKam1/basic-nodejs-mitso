import express, { Application, Response } from 'express';
import bodyParser from 'body-parser';
import clientsRouter from './resources/clients/client.router';
import ordersRouter from './resources/orders/order.router';
import productsRouter from './resources/products/product.router';
import usersRouter from './resources/users/user.router';

const app: Application = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check endpoint
app.get('/', (_req, res: Response) => {
  res.send('Service is running!');
});

// Routers
app.use('/clients', clientsRouter);
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
