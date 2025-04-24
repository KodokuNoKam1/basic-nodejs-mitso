import { v4 as uuid } from 'uuid';

export interface IClient {
  id: string;
  name: string;
  email: string;
}

export class Client implements IClient {
  id: string;
  name: string;
  email: string;

  constructor({ id = uuid(), name, email }: Partial<IClient>) {
    this.id = id;
    this.name = name!;
    this.email = email!;
  }

  static toResponse(client: Client): IClient {
    const { id, name, email } = client;
    return { id, name, email };
  }
}
