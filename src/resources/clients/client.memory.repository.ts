import { Client } from './client.model';

const clients: Client[] = [];

const getAll = async (): Promise<Client[]> => clients;

const getById = async (id: string): Promise<Client | null> =>
  clients.find(client => client.id === id) || null;

const save = async (client: Client): Promise<Client> => {
  clients.push(client);
  return client;
};

const updateById = async (id: string, data: Partial<Client>): Promise<Client | null> => {
  const index = clients.findIndex(client => client.id === id);
  if (index === -1) return null;
  clients[index] = { ...clients[index], ...data } as Client;
  return clients[index];
};

const deleteById = async (id: string): Promise<Client | null> => {
  const index = clients.findIndex(client => client.id === id);
  if (index === -1) return null;
  const deletedClient = clients.splice(index, 1)[0];
  return deletedClient || null;
};

export default { getAll, getById, save, updateById, deleteById };
