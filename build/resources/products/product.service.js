import productRepo from './product.memory.repository';
import { Product } from './product.model';
export const getAll = async () => productRepo.getAll();
export const getById = async (id) => productRepo.getById(id);
export const create = async (productData) => {
    const product = new Product(productData);
    return productRepo.save(product);
};
export const updateById = async (id, data) => productRepo.updateById(id, data);
export const deleteById = async (id) => productRepo.deleteById(id);
//# sourceMappingURL=product.service.js.map