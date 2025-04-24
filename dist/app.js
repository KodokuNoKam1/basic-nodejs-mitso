"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const client_router_1 = __importDefault(require("./resources/clients/client.router"));
const order_router_1 = __importDefault(require("./resources/orders/order.router"));
const product_router_1 = __importDefault(require("./resources/products/product.router"));
const user_router_1 = __importDefault(require("./resources/users/user.router"));
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Health check endpoint
app.get('/', (_req, res) => {
    res.send('Service is running!');
});
// Routers
app.use('/clients', client_router_1.default);
app.use('/orders', order_router_1.default);
app.use('/products', product_router_1.default);
app.use('/users', user_router_1.default);
exports.default = app;
