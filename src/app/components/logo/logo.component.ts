import { Component } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';

@Component({
  selector: 'lbk-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  readonly littleText: string = APP_MESSAGES.LITTLE_LOGO_TEXT;
  readonly bookText: string = APP_MESSAGES.BOOK_LOGO_TEXT;
}
