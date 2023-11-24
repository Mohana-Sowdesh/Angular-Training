import { Component } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';

@Component({
  selector: 'lbk-read-blog-area',
  templateUrl: './read-blog-area.component.html',
  styleUrls: ['./read-blog-area.component.scss']
})
export class ReadBlogAreaComponent {
  readonly editContentBtnText: string = APP_MESSAGES.EDIT_CONTENT;
}
