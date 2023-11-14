import { Component, Input } from '@angular/core';
import APP_MESSAGES from 'src/app/constants/app-messages';

@Component({
  selector: 'li-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() userName!: string;
  public welcomeMsg = APP_MESSAGES.WELCOME_MSG;
}
