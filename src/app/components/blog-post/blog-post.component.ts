import { Component, Input } from '@angular/core';
import { BlogData } from 'src/app/models/blog-data.model';
import APP_CONSTANTS from '../../constants/app-constants';

@Component({
  selector: 'lbk-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  @Input() blog!: BlogData;
  @Input() highlightedBlogId!: number;
  readonly blogSelectedColour: string = APP_CONSTANTS.BLOG_HIGHLIGHT_COLOUR;
  readonly blogUnselectedColour: string = APP_CONSTANTS.BLOG_POST_MENU_DEFAULT_COLOUR;
}
