import { Component } from '@angular/core';
import { SEARCH_INPUT_PLACEHOLDER } from 'src/app/constants/app-messages';
@Component({
  selector: 'li-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  public searchInputPlaceholder: string = SEARCH_INPUT_PLACEHOLDER;
}
