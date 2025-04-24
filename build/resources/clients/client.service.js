import clientRepo from './client.memory.repository';
import { Client } from './client.model';
export const getAll = async () => clientRepo.getAll();
export const getById = async (id) => clientRepo.getById(id);
export const create = async (clientData) => {
    const client = new Client(clientData);
    return clientRepo.save(client);
};
export const updateById = async (id, data) => clientRepo.updateById(id, data);
export const deleteById = async (id) => clientRepo.deleteById(id);
//# sourceMappingURL=client.service.js.map