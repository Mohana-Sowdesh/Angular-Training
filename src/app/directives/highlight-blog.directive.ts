import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[lbkHighlightBlog]'
})
export class HighlightBlogDirective {
  public defaultColour: string = '#fff';
  public highlightColour: string = '#a7e0f2';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColour;
  @Input() highlightedBlogId!: number;
  @Input() blogId!: number;
  
  constructor() { }

  /**
   * Function to change the background colour of blog post on mouse enter
   */
  @HostListener('mouseenter') mouseEnter(): void {
    if(this.blogId!=this.highlightedBlogId)
      this.backgroundColor = this.highlightColour;
  }

  /**
   * Function to change the background colour of blog post on mouse leave
   */
  @HostListener('mouseleave') mouseLeave(): void {
    if(this.blogId!=this.highlightedBlogId)
      this.backgroundColor = this.defaultColour;
  }
}
