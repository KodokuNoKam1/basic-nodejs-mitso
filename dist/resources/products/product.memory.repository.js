"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    products[index] = Object.assign(Object.assign({}, products[index]), data);
    return products[index];
};
const deleteById = async (id) => {
    const index = products.findIndex(product => product.id === id);
    if (index === -1)
        return null;
    const deletedProduct = products.splice(index, 1)[0];
    return deletedProduct || null;
};
exports.default = { getAll, getById, save, updateById, deleteById };
