import { Component } from '@angular/core';
import { BADGE_LIST } from 'src/app/constants/app-constants';

@Component({
  selector: 'li-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  public badgeList: string[] = BADGE_LIST;
}
