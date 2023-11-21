import { Component, EventEmitter, Output } from '@angular/core';
import APP_CONSTANTS from 'src/app/constants/app-constants';
import { BadgeDetails } from 'src/app/models/badge-details.model';
import { CoursesDataService } from 'src/app/services/courses-data.service';

@Component({
  selector: 'li-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})

export class BadgeComponent {
  readonly badgeList: BadgeDetails[] = APP_CONSTANTS.BADGE_LIST;
  public selectedBadgesArray: number[] = [];

  constructor(private coursesDataService: CoursesDataService) {
  }
  
  /**
   * Function triggered on clicking a badge. This function adds/removes the badge from 
   * selectedBadgesArray and applies/removes hover styles on selecting the badge
   * @param event - Click event info
   * @param badge - The badge selected
   */
  selectBadge(event: Event, badgeId: number): void {
    const selectedElement = (<HTMLElement>event.target);
    // If the selected badge is present in selectedBadgesArray remove selected styles else add selected styles
    this.selectedBadgesArray.includes(badgeId) 
        ? selectedElement.classList.remove("selected-badge")
        : selectedElement.classList.add("selected-badge");

    // If the selected badge is present in selectedBadgesArray remove it from the array else add it to the array
    this.selectedBadgesArray.includes(badgeId) 
        ? (this.selectedBadgesArray = this.selectedBadgesArray.filter( _badge => _badge!=badgeId)) 
        : this.selectedBadgesArray.push(badgeId);

    // Sets the filterTags array in coursesDataService with selectedBadgesArray value
    this.coursesDataService.filterTags.next(this.selectedBadgesArray);
  }
}
