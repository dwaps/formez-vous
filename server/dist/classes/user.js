"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, pseudo = 'anonymous', room = 'no-room') {
        this.id = id;
        this.pseudo = pseudo;
        this.room = room;
    }
}
exports.User = User;
