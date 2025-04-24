const orders = [];

const getAll = async () => orders;

const getById = async (id) => orders.find(order => order.id === id);

const save = async (order) => {
  orders.push(order);
  return order;
};

const updateById = async (id, data) => {
  const index = orders.findIndex(order => order.id === id);
  if (index === -1) return null;
  orders[index] = { ...orders[index], ...data };
  return orders[index];
};

const deleteById = async (id) => {
  const index = orders.findIndex(order => order.id === id);
  if (index === -1) return null;
  return orders.splice(index, 1)[0];
};

module.exports = { getAll, getById, save, updateById, deleteById };
