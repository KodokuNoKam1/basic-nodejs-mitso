"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getById = exports.getAll = void 0;
const user_memory_repository_1 = __importDefault(require("./user.memory.repository"));
const user_model_1 = require("./user.model");
const getAll = async () => user_memory_repository_1.default.getAll();
exports.getAll = getAll;
const getById = async (id) => user_memory_repository_1.default.getById(id);
exports.getById = getById;
const create = async (userData) => {
    const user = new user_model_1.User(userData);
    return user_memory_repository_1.default.save(user);
};
exports.create = create;
const updateById = async (id, data) => user_memory_repository_1.default.updateById(id, data);
exports.updateById = updateById;
const deleteById = async (id) => user_memory_repository_1.default.deleteById(id);
exports.deleteById = deleteById;
