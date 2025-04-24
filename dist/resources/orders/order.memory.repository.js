"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders = [];
const getAll = async () => orders;
const getById = async (id) => orders.find(order => order.id === id) || null;
const save = async (order) => {
    orders.push(order);
    return order;
};
const updateById = async (id, data) => {
    const index = orders.findIndex(order => order.id === id);
    if (index === -1)
        return null;
    orders[index] = Object.assign(Object.assign({}, orders[index]), data);
    return orders[index];
};
const deleteById = async (id) => {
    const index = orders.findIndex(order => order.id === id);
    if (index === -1)
        return null;
    const deletedOrder = orders.splice(index, 1)[0];
    return deletedOrder || null;
};
exports.default = { getAll, getById, save, updateById, deleteById };
