import { Component } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';
import { BlogsDataService } from 'src/app/services/blogs-data.service';

@Component({
  selector: 'lbk-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  readonly searchInputPlaceholder: string = APP_MESSAGES.SEARCH_BLOGS;
  public searchKey: string = '';

  constructor(private blogsDataService: BlogsDataService) {}

  /**
   * Function triggered when input is updated in search bar. On 'Enter', search value is assigned to
   * searchKey variable in blogsDataService
   * @param keyEvent - Event details on key press
   * @param event - Event details
   */
  onKeyPress(keyEvent: KeyboardEvent, event: Event): void {
    this.searchKey = (<HTMLInputElement>event.target).value;
 
    if(keyEvent.key == 'Enter') {
      this.blogsDataService.searchKey.next(this.searchKey.trim().toLowerCase());
    }
  }
}
