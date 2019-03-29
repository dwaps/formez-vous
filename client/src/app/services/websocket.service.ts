import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from '../shared/classes/user';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketExists = false;
  public user: User;

  constructor(private socket: Socket) {
    this.loadUser();
    this.checkStatus();
  }

  public checkStatus() {
    this.socket.on('connect', () => {
      console.log('[CLIENT] => connecté au serveur');
      this.socketExists = true;
    });

    this.socket.on('disconnect', () => {
      console.log('[CLIENT] => déconnecté');
      this.socketExists = false;
    });
  }

  public emit(event: string, payload?: any, callback?: Function) {
    this.socket.emit(event, payload, callback);
  }

  public listen(event: string) {
    return this.socket.fromEvent(event);
  }

  public loginWS(pseudo: string) {
    return new Promise((resolve, reject) => {
      this.emit('config-user', { pseudo }, (data: { success: true, message: string }) => {
        this.user = new User(pseudo);
        this.saveUser();
        resolve();
      });
    });
  }

  saveUser() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  loadUser() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.loginWS(this.user.pseudo);
    }
  }
}
