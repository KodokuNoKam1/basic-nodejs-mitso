import { v4 as uuid } from 'uuid';

export interface IOrder {
  id: string;
  clientId: string;
  productIds: string[];
  totalAmount: number;
}

export class Order implements IOrder {
  id: string;
  clientId: string;
  productIds: string[];
  totalAmount: number;

  constructor({ id = uuid(), clientId, productIds = [], totalAmount }: Partial<IOrder>) {
    this.id = id;
    this.clientId = clientId!;
    this.productIds = productIds!;
    this.totalAmount = totalAmount!;
  }

  static toResponse(order: Order): IOrder {
    const { id, clientId, productIds, totalAmount } = order;
    return { id, clientId, productIds, totalAmount };
  }
}
