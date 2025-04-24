import { v4 as uuid } from 'uuid';

export interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

export class User implements IUser {
  id: string;
  name: string;
  login: string;
  password: string;

  constructor({ id = uuid(), name, login, password }: Partial<IUser>) {
    this.id = id;
    this.name = name!;
    this.login = login!;
    this.password = password!;
  }

  static toResponse(user: User): Omit<IUser, 'password'> {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
