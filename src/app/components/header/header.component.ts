import { Component, Input } from '@angular/core';
import { WELCOME_MSG } from 'src/app/constants/app-messages';
@Component({
  selector: 'li-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() userName!: string;
  public welcomeMsg =  WELCOME_MSG + this.userName + '!';
}
