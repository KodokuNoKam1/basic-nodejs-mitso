import clientRepo from './client.memory.repository';
import { Client } from './client.model';

export const getAll = async (): Promise<Client[]> => clientRepo.getAll();

export const getById = async (id: string): Promise<Client | null> => clientRepo.getById(id);

export const create = async (clientData: Partial<Client>): Promise<Client> => {
  const client = new Client(clientData);
  return clientRepo.save(client);
};

export const updateById = async (id: string, data: Partial<Client>): Promise<Client | null> =>
  clientRepo.updateById(id, data);

export const deleteById = async (id: string): Promise<Client | null> => clientRepo.deleteById(id);
