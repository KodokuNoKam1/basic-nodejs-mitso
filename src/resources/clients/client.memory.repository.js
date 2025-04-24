const clients = [];

const getAll = async () => clients;

const getById = async (id) => clients.find(client => client.id === id);

const save = async (client) => {
  clients.push(client);
  return client;
};

const updateById = async (id, data) => {
  const index = clients.findIndex(client => client.id === id);
  if (index === -1) return null;
  clients[index] = { ...clients[index], ...data };
  return clients[index];
};

const deleteById = async (id) => {
  const index = clients.findIndex(client => client.id === id);
  if (index === -1) return null;
  return clients.splice(index, 1)[0];
};

export default { getAll, getById, save, updateById, deleteById };
