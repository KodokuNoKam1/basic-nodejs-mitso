const orderRepo = require('./order.memory.repository');

const getAll = async () => await orderRepo.getAll();

const getById = async (id) => await orderRepo.getById(id);

const create = async (orderData) => {
  const order = { ...orderData };
  return await orderRepo.save(order);
};

const updateById = async (id, data) => await orderRepo.updateById(id, data);

const deleteById = async (id) => await orderRepo.deleteById(id);

module.exports = { getAll, getById, create, updateById, deleteById };
