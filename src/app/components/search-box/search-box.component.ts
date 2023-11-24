import { Component } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';

@Component({
  selector: 'lbk-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  readonly searchInputPlaceholder: string = APP_MESSAGES.SEARCH_BLOGS;
}
