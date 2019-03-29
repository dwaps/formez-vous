"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersList {
    constructor() {
        this._users = [];
    }
    addUser(user) {
        this._users.push(user);
        return user;
    }
    updatePseudo(id, pseudo) {
        this._users
            .filter((user) => user.id === id)
            .map((user) => user.pseudo = pseudo);
    }
    getUsers() {
        return this._users;
    }
    getUser(id) {
        return this._users.find((user) => user.id === id);
    }
    getUsersFrom(room) {
        return this._users.filter((user) => user.room === room);
    }
    deleteUser(id) {
        const userToDelete = this.getUser(id);
        this._users = this._users.filter((user) => user.id !== id);
        return userToDelete;
    }
}
exports.UsersList = UsersList;
