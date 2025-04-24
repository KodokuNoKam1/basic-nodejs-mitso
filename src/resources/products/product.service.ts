import productRepo from './product.memory.repository';
import { Product } from './product.model';

export const getAll = async (): Promise<Product[]> => productRepo.getAll();

export const getById = async (id: string): Promise<Product | null> => productRepo.getById(id);

export const create = async (productData: Partial<Product>): Promise<Product> => {
  const product = new Product(productData);
  return productRepo.save(product);
};

export const updateById = async (id: string, data: Partial<Product>): Promise<Product | null> =>
  productRepo.updateById(id, data);

export const deleteById = async (id: string): Promise<Product | null> => productRepo.deleteById(id);
