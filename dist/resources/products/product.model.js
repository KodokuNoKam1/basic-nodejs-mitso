"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const uuid_1 = require("uuid");
class Product {
    constructor({ id = (0, uuid_1.v4)(), name, price }) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    static toResponse(product) {
        const { id, name, price } = product;
        return { id, name, price };
    }
}
exports.Product = Product;
