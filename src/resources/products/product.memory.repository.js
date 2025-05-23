const products = [];

const getAll = async () => products;

const getById = async (id) => products.find(product => product.id === id);

const save = async (product) => {
  products.push(product);
  return product;
};

const updateById = async (id, data) => {
  const index = products.findIndex(product => product.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...data };
  return products[index];
};

const deleteById = async (id) => {
  const index = products.findIndex(product => product.id === id);
  if (index === -1) return null;
  return products.splice(index, 1)[0];
};

export default { getAll, getById, save, updateById, deleteById };
