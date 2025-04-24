import { v4 as uuid } from 'uuid';

class Client {
  constructor({ id = uuid(), name, email } = {}) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static toResponse(client) {
    const { id, name, email } = client;
    return { id, name, email };
  }
}

export default Client;
