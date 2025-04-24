"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const uuid_1 = require("uuid");
class Client {
    constructor({ id = (0, uuid_1.v4)(), name, email }) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    static toResponse(client) {
        const { id, name, email } = client;
        return { id, name, email };
    }
}
exports.Client = Client;
