import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public pseudo = '';

  constructor(
    private wsService: WebsocketService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.wsService.loginWS(this.pseudo)
      .then(() => this.router.navigateByUrl('/messages'));
  }

}

