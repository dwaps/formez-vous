import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  public message = '';
  public subscription: Subscription;
  public messages: Array<{from: string, message: string}> = [];
  @ViewChild('divChatMessages') public divChatMessages: ElementRef;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.subscription = this.chatService.getMessages()
      .subscribe((message: {from: string, message: string}) => {
      this.messages.push(message);

      setTimeout(() => {
        this.divChatMessages.nativeElement.scrollTop = this.divChatMessages.nativeElement.scrollHeight;
      }, 50);
    });
  }

  public submit() {
    if (!this.message.trim().length) return;
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  } 
}

