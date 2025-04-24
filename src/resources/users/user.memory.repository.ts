import { User } from './user.model';

const users: User[] = [];

const getAll = async (): Promise<User[]> => users;

const getById = async (id: string): Promise<User | null> =>
  users.find(user => user.id === id) || null;

const save = async (user: User): Promise<User> => {
  users.push(user);
  return user;
};

const updateById = async (id: string, data: Partial<User>): Promise<User | null> => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...data } as User;
  return users[index];
};

const deleteById = async (id: string): Promise<User | null> => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  const deletedUser = users.splice(index, 1)[0];
  return deletedUser || null;
};

export default { getAll, getById, save, updateById, deleteById };
