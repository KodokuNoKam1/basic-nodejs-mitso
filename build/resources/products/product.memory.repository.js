const products = [];
const getAll = async () => products;
const getById = async (id) => products.find(product => product.id === id) || null;
const save = async (product) => {
    products.push(product);
    return product;
};
const updateById = async (id, data) => {
    const index = products.findIndex(product => product.id === id);
    if (index === -1)
        return null;
    products[index] = { ...products[index], ...data };
    return products[index];
};
const deleteById = async (id) => {
    const index = products.findIndex(product => product.id === id);
    if (index === -1)
        return null;
    const deletedProduct = products.splice(index, 1)[0];
    return deletedProduct || null;
};
export default { getAll, getById, save, updateById, deleteById };
//# sourceMappingURL=product.memory.repository.js.map