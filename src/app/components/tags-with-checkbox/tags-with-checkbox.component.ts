import { Component, Input } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';
import { BlogsDataService } from 'src/app/services/blogs-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lbk-tags-with-checkbox',
  templateUrl: './tags-with-checkbox.component.html',
  styleUrls: ['./tags-with-checkbox.component.scss']
})
export class TagsWithCheckboxComponent {
  @Input() checkBoxLabel!: string;
  public checkBoxClicked: boolean = false;
  public blogTagsSelectedSubscription!: Subscription;
  public blogTagsSelectedArray!: string[];
  readonly blogsText: string = APP_MESSAGES.BLOGS_TEXT_ADDITION_IN_FILTER;

  constructor(private blogDataService: BlogsDataService) {}

  ngOnInit(): void {
    this.blogTagsSelectedSubscription = this.blogDataService.blogTagsSelected.asObservable()
                                          .subscribe(tagsSelected => this.blogTagsSelectedArray = tagsSelected);
  }

  ngOnDestroy(): void {
    this.blogTagsSelectedSubscription.unsubscribe();
  }
  
  /**
   * Function to be executed on clicking checkbox
   */
  onCheckboxClicked(): void {
    this.checkBoxClicked == false ? (this.checkBoxClicked = true) : (this.checkBoxClicked = false);
    this.blogTagsSelectedArray.includes(this.checkBoxLabel)
      ? (this.blogTagsSelectedArray = this.blogTagsSelectedArray.filter(tag => tag!=this.checkBoxLabel))
      : this.blogTagsSelectedArray.push(this.checkBoxLabel);
    this.blogDataService.blogTagsSelected.next(this.blogTagsSelectedArray);
  }
}
