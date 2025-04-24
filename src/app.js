const express = require('express');
const bodyParser = require('body-parser');
const clientsRouter = require('./resources/clients/client.router');
const ordersRouter = require('./resources/orders/order.router');
const productsRouter = require('./resources/products/product.router');
const usersRouter = require('./resources/users/user.router');

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

module.exports = app;
