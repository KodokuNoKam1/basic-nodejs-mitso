"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getById = exports.getAll = void 0;
const order_memory_repository_1 = __importDefault(require("./order.memory.repository"));
const order_model_1 = require("./order.model");
const getAll = async () => order_memory_repository_1.default.getAll();
exports.getAll = getAll;
const getById = async (id) => order_memory_repository_1.default.getById(id);
exports.getById = getById;
const create = async (orderData) => {
    const order = new order_model_1.Order(orderData);
    return order_memory_repository_1.default.save(order);
};
exports.create = create;
const updateById = async (id, data) => order_memory_repository_1.default.updateById(id, data);
exports.updateById = updateById;
const deleteById = async (id) => order_memory_repository_1.default.deleteById(id);
exports.deleteById = deleteById;
