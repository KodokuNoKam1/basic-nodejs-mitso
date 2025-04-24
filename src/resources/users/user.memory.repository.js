const users = [];

const getAll = async () => users;

const getById = async (id) => users.find(user => user.id === id);

const save = async (user) => {
  users.push(user);
  return user;
};

const updateById = async (id, data) => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...data };
  return users[index];
};

const deleteById = async (id) => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  return users.splice(index, 1)[0];
};

module.exports = { getAll, getById, save, updateById, deleteById };
