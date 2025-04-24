const { v4: uuid } = require('uuid');

class Product {
  constructor({ id = uuid(), name, price } = {}) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  static toResponse(product) {
    const { id, name, price } = product;
    return { id, name, price };
  }
}

module.exports = Product;
