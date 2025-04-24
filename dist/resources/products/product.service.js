"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getById = exports.getAll = void 0;
const product_memory_repository_1 = __importDefault(require("./product.memory.repository"));
const product_model_1 = require("./product.model");
const getAll = async () => product_memory_repository_1.default.getAll();
exports.getAll = getAll;
const getById = async (id) => product_memory_repository_1.default.getById(id);
exports.getById = getById;
const create = async (productData) => {
    const product = new product_model_1.Product(productData);
    return product_memory_repository_1.default.save(product);
};
exports.create = create;
const updateById = async (id, data) => product_memory_repository_1.default.updateById(id, data);
exports.updateById = updateById;
const deleteById = async (id) => product_memory_repository_1.default.deleteById(id);
exports.deleteById = deleteById;
