import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { USERNAMES, COLOUR_ARRAY } from '../app/constants/constants';
import { chatData } from './models/chat-data.model';
import { MobileComponentEmittingData } from './models/mobile-component-emitting-data.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public senderName: string = this.userService.userData[0].name;
  public receiverName: string = this.userService.userData[1].name;
  public senderColour?: any = localStorage.getItem(this.userService.userData[0].userId.toString());
  public receiverColour?: any = localStorage.getItem(this.userService.userData[1].userId.toString());
  public chat:chatData = {};
  
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {    
    if(localStorage.getItem(this.userService.userData[0].userId.toString()) === null) {
      localStorage.setItem(this.userService.userData[0].userId.toString(), COLOUR_ARRAY[4]);
    }
    if(localStorage.getItem(this.userService.userData[1].userId.toString()) === null) {
      localStorage.setItem(this.userService.userData[1].userId.toString(), COLOUR_ARRAY[3]);
    }

    if(this.chat[this.senderName] === undefined || this.chat[this.receiverName] === undefined) {
      this.chat[this.senderName] = {};
      this.chat[this.senderName][this.receiverName] = [];
      this.chat[this.receiverName] = {};
      this.chat[this.receiverName][this.senderName] = [];
    }
  }

  /**
   * Function to push the data in both sender's and receiver's array along with timestamp
   * @returns - void
   */
  updateArrays(args: MobileComponentEmittingData) {
    if(args.textInput ==='' || args.textInput.trim().length === 0) {
      return;
    }

    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    let formattedHours = hours % 12 || 12;
    let finalHrs = formattedHours < 10 ? ('0'+String(formattedHours)) : String(formattedHours);
    let formattedMinutes = minutes < 10 ? ('0'+minutes) : minutes;
    let time = finalHrs + '.' + formattedMinutes + ' ' + ampm;

    this.chat[args.senderName][args.receiverName].push({
      message: args.textInput,
      timestamp: time,
      isSent: true
    });
    this.chat[args.receiverName][args.senderName].push({
      message: args.textInput,
      timestamp: time,
      isSent: false
    });
    console.log(this.chat);
    
  }
}
