import { v4 as uuid } from 'uuid';
export class User {
    id;
    name;
    login;
    password;
    constructor({ id = uuid(), name, login, password }) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
//# sourceMappingURL=user.model.js.map