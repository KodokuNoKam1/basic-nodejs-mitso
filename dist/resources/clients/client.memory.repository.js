"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients = [];
const getAll = async () => clients;
const getById = async (id) => clients.find(client => client.id === id) || null;
const save = async (client) => {
    clients.push(client);
    return client;
};
const updateById = async (id, data) => {
    const index = clients.findIndex(client => client.id === id);
    if (index === -1)
        return null;
    clients[index] = Object.assign(Object.assign({}, clients[index]), data);
    return clients[index];
};
const deleteById = async (id) => {
    const index = clients.findIndex(client => client.id === id);
    if (index === -1)
        return null;
    const deletedClient = clients.splice(index, 1)[0];
    return deletedClient || null;
};
exports.default = { getAll, getById, save, updateById, deleteById };
