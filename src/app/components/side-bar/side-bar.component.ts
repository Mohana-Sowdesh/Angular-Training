import { Component } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';

@Component({
  selector: 'lbk-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  readonly filterHeading: string = APP_MESSAGES.FILTER_MSG;
  readonly blogType: string[] = APP_MESSAGES.BLOG_TYPES;
  readonly viewMembersMsg: string = APP_MESSAGES.VIEW_MEMBERS;
  readonly switchModeMsg: string = APP_MESSAGES.SWITCH_MODE;
}
