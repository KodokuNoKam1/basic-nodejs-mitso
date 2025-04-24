const { v4: uuid } = require('uuid');

class Order {
  constructor({ id = uuid(), clientId, productIds = [], totalAmount } = {}) {
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

module.exports = Order;
