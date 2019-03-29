"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_list_1 = require("../classes/user-list");
const user_1 = require("../classes/user");
const connectedUsers = new user_list_1.UsersList();
exports.connectUser = (client) => {
    const user = new user_1.User(client.id);
    connectedUsers.addUser(user);
    console.log('\nUTILISATEURS CONNECTES :', connectedUsers);
};
exports.disconnectUser = (client) => {
    client.on('disconnect', () => {
        connectedUsers.deleteUser(client.id);
        console.log('\nUTILISATEUR SUPPRIME :', connectedUsers);
    });
};
exports.onMessage = (client, io) => {
    client.on('message', (payload) => {
        console.log(`[MESSAGE REÇU de ${payload.from}] => ${payload.message}`);
        io.emit('new-message', payload);
    });
};
exports.onConfigUser = (client) => {
    client.on('config-user', (payload, callback) => {
        connectedUsers.updatePseudo(client.id, payload.pseudo);
        console.log('\nNOUVEAU PSEUDO :', connectedUsers);
        callback({
            success: true,
            message: `User ${payload.pseudo} configured`
        });
    });
};
