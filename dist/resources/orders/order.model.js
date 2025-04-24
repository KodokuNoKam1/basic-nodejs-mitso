"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const uuid_1 = require("uuid");
class Order {
    constructor({ id = (0, uuid_1.v4)(), clientId, productIds = [], totalAmount }) {
        this.id = id;
        this.clientId = clientId;
        this.productIds = productIds;
        this.totalAmount = totalAmount;
    }
    static toResponse(order) {
        const { id, clientId, productIds, totalAmount } = order;
        return { id, clientId, productIds, totalAmount };
    }
}
exports.Order = Order;
