import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public pseudo = '';

  constructor(
    private wsService: WebsocketService
  ) { }

  ngOnInit() {
    this.pseudo = this.wsService.user.pseudo;
  }

}
