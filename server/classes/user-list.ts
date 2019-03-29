import { User } from "./user";

export class UsersList {
  private _users: User[] = [];

  public addUser(user: User) {
    this._users.push(user);
    return user;
  }

  public updatePseudo(id: string, pseudo: string) {
    this._users
      .filter((user: User) => user.id === id)
      .map((user: User) => user.pseudo = pseudo);
  }

  public getUsers() {
    return this._users;
  }

  public getUser(id: string) {
    return this._users.find((user: User) => user.id === id);
  }

  public getUsersFrom(room: string) {
    return this._users.filter((user: User) => user.room === room);
  }

  public deleteUser(id: string) {
    const userToDelete = this.getUser(id);
    this._users = this._users.filter((user: User) => user.id !== id);
    return userToDelete;
  }
}