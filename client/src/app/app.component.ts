import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(
    private chatService: ChatService
  ) {}

  ngOnInit() {
    this.subscription = this.chatService.getPrivateMessages()
      .subscribe(msg => {
        console.log(msg);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

