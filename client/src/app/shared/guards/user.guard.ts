import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate  {

  constructor(
    private wsService: WebsocketService,
    private router: Router
  ) {}
  
  canActivate() {
    if (!this.wsService.user) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
  
}

