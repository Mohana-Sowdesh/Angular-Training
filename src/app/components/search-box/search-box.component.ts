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

  onKeyPress(keyEvent: KeyboardEvent, event: Event) {
    this.searchKey = (<HTMLInputElement>event.target).value;
    console.log(keyEvent.key);
    
    if(keyEvent.key == 'Enter' && this.searchKey.trim() !='') {
      this.courseDataService.searchKey.next(this.searchKey.trim().toLowerCase());
    }
  }
}
