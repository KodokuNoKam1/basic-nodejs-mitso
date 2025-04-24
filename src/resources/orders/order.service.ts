import orderRepo from './order.memory.repository';
import { Order } from './order.model';

export const getAll = async (): Promise<Order[]> => orderRepo.getAll();

export const getById = async (id: string): Promise<Order | null> => orderRepo.getById(id);

export const create = async (orderData: Partial<Order>): Promise<Order> => {
  const order = new Order(orderData);
  return orderRepo.save(order);
};

export const updateById = async (id: string, data: Partial<Order>): Promise<Order | null> =>
  orderRepo.updateById(id, data);

export const deleteById = async (id: string): Promise<Order | null> => orderRepo.deleteById(id);
