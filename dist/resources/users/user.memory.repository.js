"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [];
const getAll = async () => users;
const getById = async (id) => users.find(user => user.id === id) || null;
const save = async (user) => {
    users.push(user);
    return user;
};
const updateById = async (id, data) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1)
        return null;
    users[index] = Object.assign(Object.assign({}, users[index]), data);
    return users[index];
};
const deleteById = async (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1)
        return null;
    const deletedUser = users.splice(index, 1)[0];
    return deletedUser || null;
};
exports.default = { getAll, getById, save, updateById, deleteById };
