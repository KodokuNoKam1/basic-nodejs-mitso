import { Order } from './order.model';

const orders: Order[] = [];

const getAll = async (): Promise<Order[]> => orders;

const getById = async (id: string): Promise<Order | null> =>
  orders.find(order => order.id === id) || null;

const save = async (order: Order): Promise<Order> => {
  orders.push(order);
  return order;
};

const updateById = async (id: string, data: Partial<Order>): Promise<Order | null> => {
  const index = orders.findIndex(order => order.id === id);
  if (index === -1) return null;
  orders[index] = { ...orders[index], ...data } as Order;
  return orders[index];
};

const deleteById = async (id: string): Promise<Order | null> => {
  const index = orders.findIndex(order => order.id === id);
  if (index === -1) return null;
  const deletedOrder = orders.splice(index, 1)[0];
  return deletedOrder || null;
};

export default { getAll, getById, save, updateById, deleteById };
