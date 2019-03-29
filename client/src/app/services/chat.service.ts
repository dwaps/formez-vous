import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private wsService: WebsocketService
  ) { }

  public sendMessage(message: string) {
    const payload = {
      from: this.wsService.user.pseudo,
      message
    };

    this.wsService.emit('message', payload);
  }

  public getMessages() {
    return this.wsService.listen('new-message');
  }

  public getPrivateMessages() {
    return this.wsService.listen('new-private-message');
  }
}
