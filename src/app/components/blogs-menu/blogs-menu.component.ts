import { Component } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';

@Component({
  selector: 'lbk-blogs-menu',
  templateUrl: './blogs-menu.component.html',
  styleUrls: ['./blogs-menu.component.scss']
})
export class BlogsMenuComponent {
  readonly newBtnText: string = APP_MESSAGES.NEW_BUTTON_TEXT;
  readonly newBtnBgColor: string = APP_MESSAGES.NEW_BTN_BG_COLOR;
  readonly newBtnFontColor: string = APP_MESSAGES.NEW_BTN_FONT_COLOR;
  public showNewBlogPostModal: boolean = false;
  public newBlogPostModalHeading: string = APP_MESSAGES.ADD_NEW_BLOG;

  /**
   * Function to be executed on clicking 'New' button
   */
  onNewBtnClick() {
    this.showNewBlogPostModal = true;
  }

  /**
   * Function to be executed on catching closeNewBlogPostModal event.
   * Sets the showNewBlogPostModal property to false
   */
  onHandleClick() {
    this.showNewBlogPostModal = false;
  }
}
