import { Component, EventEmitter, Input, Output } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';

@Component({
  selector: 'lbk-new-blog-modal',
  templateUrl: './new-blog-modal.component.html',
  styleUrls: ['./new-blog-modal.component.scss']
})
export class NewBlogModalComponent {
  readonly nameYourBlogText: string = APP_MESSAGES.NAME_YOUR_BLOG;
  readonly writeContentHere: string = APP_MESSAGES.WRITE_CONTENT_HERE;
  readonly blogTypeDropdownLabel: string = APP_MESSAGES.CHOOSE_A_TAG;
  readonly blogTypes: string[] = APP_MESSAGES.BLOG_TYPES;
  readonly addBtnText: string = APP_MESSAGES.ADD_BUTTON_TEXT;
  readonly addBtnBgColor: string = APP_MESSAGES.NEW_BTN_BG_COLOR;
  readonly cancelBtnText: string = APP_MESSAGES.CANCEL_BUTTON_TEXT;
  readonly cancelBtnBgColor: string = APP_MESSAGES.CANCEL_BTN_BG_COLOR;
  readonly addBtnFontColor: string = APP_MESSAGES.NEW_BTN_FONT_COLOR;
  @Input() modalHeading!: string;
  @Output() closeNewBlogPostModal = new EventEmitter<void>();
  
  /**
   * Function to be executed on clicking the backdrop. This will emit an event. 
   */
  onClose() {
    this.closeNewBlogPostModal.emit();
  }
}
