import productRepo from './product.memory.repository.js';

const getAll = async () => await productRepo.getAll();

const getById = async (id) => await productRepo.getById(id);

const create = async (productData) => {
  const product = { ...productData };
  return await productRepo.save(product);
};

const updateById = async (id, data) => await productRepo.updateById(id, data);

const deleteById = async (id) => await productRepo.deleteById(id);

export default { getAll, getById, create, updateById, deleteById };
