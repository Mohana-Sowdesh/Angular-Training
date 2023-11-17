import { Component } from '@angular/core';
import APP_MESSAGES from 'src/app/constants/app-messages';
import { CoursesDataService } from 'src/app/services/courses-data.service';

@Component({
  selector: 'li-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  public searchInputPlaceholder: string = APP_MESSAGES.SEARCH_INPUT_PLACEHOLDER;
  public searchKey: string = '';

  constructor(private courseDataService: CoursesDataService) {}

  /**
   * Function triggered when input is updated in search bar. On 'Enter', search value is assigned to
   * searchKey variable in courseDataService
   * @param keyEvent - Event details on key press
   * @param event - Event details
   */
  onKeyPress(keyEvent: KeyboardEvent, event: Event): void {
    this.searchKey = (<HTMLInputElement>event.target).value;
 
    if(keyEvent.key == 'Enter') {
      this.courseDataService.searchKey.next(this.searchKey.trim().toLowerCase());
    }
  }
}
