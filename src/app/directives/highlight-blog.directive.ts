import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { ThemeConfigService } from '../services/theme-config.service';

@Directive({
  selector: '[lbkHighlightBlog]'
})
export class HighlightBlogDirective {
  public defaultColourLightTheme: string = '#fff';
  public highlightColourLightTheme: string = '#a7e0f2';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColourLightTheme;
  @Input() highlightedBlogId!: number;
  @Input() blogId!: number;
  
  constructor(private themeConfigService: ThemeConfigService) { }

  /**
   * Function to change the background colour of blog post on mouse enter
   */
  @HostListener('mouseenter') mouseEnter(): void {
    if(this.blogId!=this.highlightedBlogId)
      this.backgroundColor = this.highlightColourLightTheme;
  }

  /**
   * Function to change the background colour of blog post on mouse leave
   */
  @HostListener('mouseleave') mouseLeave(): void {
    if(this.blogId!=this.highlightedBlogId)
      this.backgroundColor = this.defaultColourLightTheme;
  }
}
