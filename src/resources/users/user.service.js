import userRepo from './user.memory.repository.js';

const getAll = async () => await userRepo.getAll();

const getById = async (id) => await userRepo.getById(id);

const create = async (userData) => {
  const user = { ...userData };
  return await userRepo.save(user);
};

const updateById = async (id, data) => await userRepo.updateById(id, data);

const deleteById = async (id) => await userRepo.deleteById(id);

export default { getAll, getById, create, updateById, deleteById };
