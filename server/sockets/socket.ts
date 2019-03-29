import socketIO, { Socket } from "socket.io";
import { UsersList } from "../classes/user-list";
import { User } from "../classes/user";

const connectedUsers = new UsersList();

export const connectUser = (client: Socket) => {
  const user = new User(client.id);
  connectedUsers.addUser(user);
  console.log('\nUTILISATEURS CONNECTES :', connectedUsers);
}

export const disconnectUser = (client: Socket) => {
  client.on('disconnect', () => {
    connectedUsers.deleteUser(client.id);
    console.log('\nUTILISATEUR SUPPRIME :', connectedUsers);
  })
}

export const onMessage = (client: Socket, io: socketIO.Server) => {
  client.on('message', (payload: {from: string, message: string}) => {
    console.log(`[MESSAGE REÇU de ${payload.from}] => ${payload.message}`);
    io.emit('new-message', payload);
  })
}

export const onConfigUser = (client: Socket) => {
  client.on('config-user', (payload: { pseudo: string }, callback: Function) => {
    connectedUsers.updatePseudo(client.id, payload.pseudo);
    console.log('\nNOUVEAU PSEUDO :', connectedUsers);
    
    callback({
      success: true,
      message: `User ${payload.pseudo} configured`
    });
  })
}


