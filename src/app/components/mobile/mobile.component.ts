import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { chatData } from 'src/app/models/chat-data.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})

export class MobileComponent implements OnInit, OnDestroy {
  public textInput = '';
  public colourList = [ {colorCode: '#ffffff', isSelected: false}, 
                        {colorCode: '#dce2c6', isSelected: false},
                        {colorCode: '#677879', isSelected: false},
                        {colorCode: '#284017', isSelected: false},
                        {colorCode: '#4e4e6c', isSelected: false},
                        {colorCode: '#5d82a0', isSelected: false},
                      ];
  @Input() public senderName !: string;
  @Input() public receiverName !: string;
  @Input() public colourSelected !:string;
  public chatData!:chatData;
  public chatSubscription!: Subscription;
  
  constructor(private chatService: ChatService) {
  }
  
  ngOnInit():void {
    let index = this.colourList.findIndex((color) => color.colorCode === localStorage.getItem(this.senderName));
    this.colourList[index].isSelected = true;

    this.chatSubscription = this.chatService.chat.subscribe(
      (data)=>this.chatData = data
    );

    if(this.chatData[this.senderName] === undefined || this.chatData[this.receiverName] === undefined) {
      this.chatData[this.senderName] = {};
      this.chatData[this.senderName][this.receiverName] = [];
      this.chatData[this.receiverName] = {};
      this.chatData[this.receiverName][this.senderName] = [];
    }
  }
  
  ngOnDestroy(): void {
    this.chatSubscription.unsubscribe();
  }
    
  /**
   * Function to push the data in both sender's and receiver's array along with timestamp
   * @returns - void
   */
  updateArrays() {
    if(this.textInput==='' || this.textInput.trim().length === 0) {
      this.textInput='';
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

    this.chatData[this.senderName][this.receiverName].push({
      message: this.textInput,
      timestamp: time,
      isSent: true
    });
    this.chatData[this.receiverName][this.senderName].push({
      message: this.textInput,
      timestamp: time,
      isSent: false
    });
    this.textInput='';
  }

  /**
   * Function to update the isSelected property of colourList array on that colour selection 
   * and to update localStorage value of that user
   * @returns - void
   */
  onColorSelection(colorCodeReceived: string):void {
    this.colourSelected = colorCodeReceived;
    let index = this.colourList.findIndex((color) => color.colorCode === colorCodeReceived);
    this.colourList[index].isSelected = true;
    this.colourList.map((color) => color.colorCode!==colorCodeReceived ? color.isSelected=false : color.isSelected);
    localStorage.setItem(this.senderName, colorCodeReceived);
  }
}
