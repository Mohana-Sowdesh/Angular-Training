import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';
import { BlogData } from 'src/app/models/blog-data.model';
import { BlogsDataService } from 'src/app/services/blogs-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lbk-blogs-menu',
  templateUrl: './blogs-menu.component.html',
  styleUrls: ['./blogs-menu.component.scss']
})
export class BlogsMenuComponent implements OnInit, OnDestroy {
  readonly newBtnText: string = APP_MESSAGES.NEW_BUTTON_TEXT;
  readonly newBtnBgColor: string = APP_MESSAGES.NEW_BTN_BG_COLOR;
  readonly newBtnFontColor: string = APP_MESSAGES.NEW_BTN_FONT_COLOR;
  readonly addBtnText: string = APP_MESSAGES.ADD_BUTTON_TEXT;
  readonly noResultFound: string = APP_MESSAGES.NO_RESULT_FOUND;
  public showNewBlogPostModal: boolean = false;
  public newBlogPostModalHeading: string = APP_MESSAGES.ADD_NEW_BLOG;
  public allBlogs!: BlogData[];
  public blogsToDisplay!: BlogData[];
  public searchKey: string = '';
  public blogDataSubscription!: Subscription;
  public searchKeySubscription!: Subscription;
  public blogTagsSelectedSubscription!: Subscription;
  public blogTagsSelectedArray: string[] = [];
  public highlightedBlogId!: number;
  @Output() blogIdEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor(private blogDataService: BlogsDataService) {
  }

  ngOnInit(): void {
    this.blogDataSubscription = this.blogDataService.blogsDataSubject.asObservable()
                                  .subscribe((blogs) => {
                                    this.allBlogs = blogs;
                                    this.blogsToDisplay = this.allBlogs;
                                  });
    this.searchKeySubscription = this.blogDataService.searchKey.asObservable()
                                  .subscribe(_searchKey => {                             
                                    this.searchKey = _searchKey;
                                    this.updateBlogsToDisplay();
                                  });
    this.blogTagsSelectedSubscription = this.blogDataService.blogTagsSelected.asObservable()
                                  .subscribe(tagsSelected => {
                                      this.blogTagsSelectedArray = tagsSelected;
                                      this.updateBlogsToDisplay();
                                  });                           
  }

  ngOnDestroy(): void {
    this.blogDataSubscription.unsubscribe();
    this.searchKeySubscription.unsubscribe();
    this.blogTagsSelectedSubscription.unsubscribe();
  }

  /**
   * Function to be executed on clicking 'New' button
   */
  onNewBtnClick(): void {
    this.showNewBlogPostModal = true;
  }

  /**
   * Function to be executed on catching closeNewBlogPostModal event.
   * Sets the showNewBlogPostModal property to false
   */
  onHandleClick(): void {
    this.showNewBlogPostModal = false;
  }

  /**
   * Function to emit event to read-blog-area component to read the blog
   */
  onPostClick(blog: BlogData): void {
    this.blogIdEmitter.emit(blog.id);
    this.highlightedBlogId = blog.id; 
  }

  /**
   * Function to filter blog posts based on search key and blog tags
   */
  updateBlogsToDisplay(): void {
    if(this.searchKey.length === 0 && this.blogTagsSelectedArray.length === 0)
      this.blogsToDisplay = this.allBlogs;
    else {
      this.blogsToDisplay = this.allBlogs.filter(blog => blog.title.toLowerCase().includes(this.searchKey))
                                          .filter(blog => this.blogTagsSelectedArray.length === 0 || (this.blogTagsSelectedArray.includes(blog.type)));
    }
  }
}
