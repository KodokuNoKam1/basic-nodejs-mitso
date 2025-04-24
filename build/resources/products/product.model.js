import { v4 as uuid } from 'uuid';
export class Product {
    id;
    name;
    price;
    constructor({ id = uuid(), name, price }) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    static toResponse(product) {
        const { id, name, price } = product;
        return { id, name, price };
    }
}
//# sourceMappingURL=product.model.js.map