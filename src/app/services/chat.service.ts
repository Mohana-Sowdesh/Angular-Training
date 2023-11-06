import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { chatData } from '../models/chat-data.model';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  public chat : BehaviorSubject<chatData> = new BehaviorSubject({});

  constructor() { }
  
}
