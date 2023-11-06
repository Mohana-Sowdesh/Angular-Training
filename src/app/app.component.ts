import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public senderName: string = this.userService.userData[0].name;
  public receiverName: string = this.userService.userData[1].name;
  public senderColour: any = localStorage.getItem(this.senderName);
  public receiverColour: any = localStorage.getItem(this.receiverName);

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {    
    if(localStorage.getItem('Somukumar Ekambaram') === null) {
      localStorage.setItem('Somukumar Ekambaram', '#5d82a0');
    }
    if(localStorage.getItem('Mounika Murugeshan') === null) {
      localStorage.setItem('Mounika Murugeshan', '#4e4e6c');
    }
  }
}
