import clientRepo from './client.memory.repository.js';

const getAll = async () => await clientRepo.getAll();

const getById = async (id) => await clientRepo.getById(id);

const create = async (clientData) => {
  const client = { ...clientData };
  return await clientRepo.save(client);
};

const updateById = async (id, data) => await clientRepo.updateById(id, data);

const deleteById = async (id) => await clientRepo.deleteById(id);

export default { getAll, getById, create, updateById, deleteById };
