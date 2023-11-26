import { Component, Input, OnInit } from '@angular/core';
import { BlogData } from 'src/app/models/blog-data.model';
import APP_CONSTANTS from '../../constants/app-constants';
import { ThemeConfigService } from 'src/app/services/theme-config.service';

@Component({
  selector: 'lbk-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  @Input() blog!: BlogData;
  @Input() highlightedBlogId!: number;
  public blogSelectedColour: string = APP_CONSTANTS.BLOG_HIGHLIGHT_COLOUR_LIGHT_THEME;
  public blogUnselectedColour: string = APP_CONSTANTS.BLOG_POST_MENU_DEFAULT_COLOUR_LIGHT_THEME;
}
