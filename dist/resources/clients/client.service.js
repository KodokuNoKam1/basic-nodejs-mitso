"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getById = exports.getAll = void 0;
const client_memory_repository_1 = __importDefault(require("./client.memory.repository"));
const client_model_1 = require("./client.model");
const getAll = async () => client_memory_repository_1.default.getAll();
exports.getAll = getAll;
const getById = async (id) => client_memory_repository_1.default.getById(id);
exports.getById = getById;
const create = async (clientData) => {
    const client = new client_model_1.Client(clientData);
    return client_memory_repository_1.default.save(client);
};
exports.create = create;
const updateById = async (id, data) => client_memory_repository_1.default.updateById(id, data);
exports.updateById = updateById;
const deleteById = async (id) => client_memory_repository_1.default.deleteById(id);
exports.deleteById = deleteById;
