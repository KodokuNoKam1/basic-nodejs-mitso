import { v4 as uuid } from 'uuid';

export interface IProduct {
  id: string;
  name: string;
  price: number;
}

export class Product implements IProduct {
  id: string;
  name: string;
  price: number;

  constructor({ id = uuid(), name, price }: Partial<IProduct>) {
    this.id = id;
    this.name = name!;
    this.price = price!;
  }

  static toResponse(product: Product): IProduct {
    const { id, name, price } = product;
    return { id, name, price };
  }
}
