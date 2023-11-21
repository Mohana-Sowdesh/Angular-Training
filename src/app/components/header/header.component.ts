import { Component, Input } from '@angular/core';
import APP_MESSAGES from 'src/app/constants/app-messages';

@Component({
  selector: 'li-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() userName!: string;
  readonly welcomeMsg: string = APP_MESSAGES.WELCOME_MSG;
}
