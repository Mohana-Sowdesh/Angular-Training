import { Component, Input } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';
import APP_CONSTANTS from '../../constants/app-constants';
import { BlogData } from 'src/app/models/blog-data.model';

@Component({
  selector: 'lbk-read-blog-area',
  templateUrl: './read-blog-area.component.html',
  styleUrls: ['./read-blog-area.component.scss']
})
export class ReadBlogAreaComponent {
  readonly editContentBtnText: string = APP_MESSAGES.EDIT_CONTENT;
  readonly saveBtnText: string = APP_MESSAGES.SAVE_EDITTED_CONTENT_BTN_TEXT;
  readonly selectBlogText: string = APP_MESSAGES.SELECT_A_BLOG;
  readonly readBlogImgPath: string = APP_CONSTANTS.READ_BLOG_IMG_PATH;
  readonly chooseBlogToReadImgPath: string = APP_CONSTANTS.CHOOSE_BLOG_TO_READ_IMG_PATH;
  public showEditBlogPostModal: boolean = false;
  public editBlogPostModalHeading: string = APP_MESSAGES.EDIT_BLOG_MODAL_HEADING;
  @Input() blogToDisplay!: BlogData;

  /**
   * Function to be executed on clicking 'New' button
   */
  onEditContentBtnClick(): void {
    this.showEditBlogPostModal = true;
  }

  /**
   * Function to be executed on catching closeNewBlogPostModal event.
   * Sets the showNewBlogPostModal property to false
   */
  onHandleClick(): void {
    this.showEditBlogPostModal = false;
  }
}
