import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { chatData } from 'src/app/models/chat-data.model';
import { COLOUR_ARRAY, PROFILE_IMG_PATH, CONSTANTS } from 'src/app/constants/constants';
import { UserService } from 'src/app/services/user.service';
import { MobileComponentEmittingData } from 'src/app/models/mobile-component-emitting-data.model';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})

export class MobileComponent implements OnInit {
  public textInput:string = '';
  public colourList = [ {colorCode: COLOUR_ARRAY[0], isSelected: false}, 
                        {colorCode: COLOUR_ARRAY[1], isSelected: false},
                        {colorCode: COLOUR_ARRAY[2], isSelected: false},
                        {colorCode: COLOUR_ARRAY[3], isSelected: false},
                        {colorCode: COLOUR_ARRAY[4], isSelected: false},
                        {colorCode: COLOUR_ARRAY[5], isSelected: false},
                      ];
  public profileImgPath = PROFILE_IMG_PATH;
  public typeToGetStartedConstant:string = CONSTANTS.TYPE_TO_GET_STATED;
  public inputPlaceholderText:string = CONSTANTS.PLACEHOLDER;
  @Input() public senderName !: string;
  @Input() public receiverName !: string;
  @Input() public colourSelected !:string;
  @Input() public chat:chatData = {};
  @Output() msgSentEmitter = new EventEmitter<MobileComponentEmittingData>();

  constructor(private userService: UserService) {
  }
  
  ngOnInit():void {
    let userIndex = this.userService.userData.findIndex((user) => user.name === this.senderName);
    let index = this.colourList.findIndex((color) => color.colorCode === localStorage.getItem(this.userService.userData[userIndex].userId.toString()));
    this.colourList[index].isSelected = true;
  }

  triggerEvent() {
    const args: MobileComponentEmittingData = {
                                                textInput: this.textInput,
                                                senderName: this.senderName,
                                                receiverName: this.receiverName
                                              }
    this.msgSentEmitter.emit(args);
    this.textInput = '';
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
    let userIndex = this.userService.userData.findIndex((user) => user.name === this.senderName);
    localStorage.setItem(this.userService.userData[userIndex].userId.toString(), colorCodeReceived);
  }
}
