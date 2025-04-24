import userRepo from './user.memory.repository';
import { User } from './user.model';

export const getAll = async (): Promise<User[]> => userRepo.getAll();

export const getById = async (id: string): Promise<User | null> => userRepo.getById(id);

export const create = async (userData: Partial<User>): Promise<User> => {
  const user = new User(userData);
  return userRepo.save(user);
};

export const updateById = async (id: string, data: Partial<User>): Promise<User | null> =>
  userRepo.updateById(id, data);

export const deleteById = async (id: string): Promise<User | null> => userRepo.deleteById(id);
