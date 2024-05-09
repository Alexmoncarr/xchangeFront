import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  chats: Chat[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getChats().subscribe((data) => {
      this.chats = data;
    });
  }
}