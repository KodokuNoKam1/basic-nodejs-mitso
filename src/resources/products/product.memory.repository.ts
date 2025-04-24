import { Product } from './product.model';

const products: Product[] = [];

const getAll = async (): Promise<Product[]> => products;

const getById = async (id: string): Promise<Product | null> =>
  products.find(product => product.id === id) || null;

const save = async (product: Product): Promise<Product> => {
  products.push(product);
  return product;
};

const updateById = async (id: string, data: Partial<Product>): Promise<Product | null> => {
  const index = products.findIndex(product => product.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...data } as Product;
  return products[index];
};

const deleteById = async (id: string): Promise<Product | null> => {
  const index = products.findIndex(product => product.id === id);
  if (index === -1) return null;
  const deletedProduct = products.splice(index, 1)[0];
  return deletedProduct || null;
};

export default { getAll, getById, save, updateById, deleteById };
