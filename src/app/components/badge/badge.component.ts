import { Component, EventEmitter, Output } from '@angular/core';
import APP_CONSTANTS from 'src/app/constants/app-constants';

@Component({
  selector: 'li-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})

export class BadgeComponent {
  public badgeList: string[] = APP_CONSTANTS.BADGE_LIST;
  @Output() badgeClickEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  selectBadge(badge: string): void {
    console.log(event);
    console.log(badge);
    
    // const badgeValue = (<HTMLElement>event.target).value;
  }
}
