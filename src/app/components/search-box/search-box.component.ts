import { Component } from '@angular/core';
import APP_MESSAGES from 'src/app/constants/app-messages';
@Component({
  selector: 'li-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  public searchInputPlaceholder: string = APP_MESSAGES.SEARCH_INPUT_PLACEHOLDER;
}
