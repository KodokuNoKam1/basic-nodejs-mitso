import userRepo from './user.memory.repository';
import { User } from './user.model';
export const getAll = async () => userRepo.getAll();
export const getById = async (id) => userRepo.getById(id);
export const create = async (userData) => {
    const user = new User(userData);
    return userRepo.save(user);
};
export const updateById = async (id, data) => userRepo.updateById(id, data);
export const deleteById = async (id) => userRepo.deleteById(id);
//# sourceMappingURL=user.service.js.map