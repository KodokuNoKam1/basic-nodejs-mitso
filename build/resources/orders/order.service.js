import orderRepo from './order.memory.repository';
import { Order } from './order.model';
export const getAll = async () => orderRepo.getAll();
export const getById = async (id) => orderRepo.getById(id);
export const create = async (orderData) => {
    const order = new Order(orderData);
    return orderRepo.save(order);
};
export const updateById = async (id, data) => orderRepo.updateById(id, data);
export const deleteById = async (id) => orderRepo.deleteById(id);
//# sourceMappingURL=order.service.js.map