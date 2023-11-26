import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import APP_MESSAGES from '../../constants/app-messages';
import { BlogData } from 'src/app/models/blog-data.model';
import { BlogsDataService } from 'src/app/services/blogs-data.service';
import { Subscription } from 'rxjs';

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
  readonly addBtnBgColor: string = APP_MESSAGES.NEW_BTN_BG_COLOR;
  readonly cancelBtnText: string = APP_MESSAGES.CANCEL_BUTTON_TEXT;
  readonly cancelBtnBgColor: string = APP_MESSAGES.CANCEL_BTN_BG_COLOR;
  readonly addBtnFontColor: string = APP_MESSAGES.NEW_BTN_FONT_COLOR;
  public blogDataSubscription!: Subscription;
  public allBlogs!: BlogData[];
  @Input() actionBtnText!: string;
  @Input() modalHeading!: string;
  @Input() blogToDisplay!: BlogData;
  @Output() closeNewBlogPostModal: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('blogTitle') blogTitleInputValue!: ElementRef;
  @ViewChild('blogType') blogTypeDropdownValue!: ElementRef;
  @ViewChild('blogContent') blogContentInputValue!: ElementRef;
  
  constructor(private blogDataService: BlogsDataService) {}

  ngOnInit(): void {
    this.blogDataSubscription = this.blogDataService.blogsDataSubject.asObservable()
                                  .subscribe((blogs) =>  this.allBlogs = blogs);                        
  }

  ngOnDestroy(): void {
    this.blogDataSubscription.unsubscribe();
  }

  /**
   * Function to be executed on clicking the backdrop. This will emit an event. 
   */
  onClose(): void {
    this.closeNewBlogPostModal.emit();
  }
  
  /**
   * Function to be executed on clicking Add/ Save button
   */
  onActionBtnClick(): void {
    if(this.blogToDisplay) {
      let blogIndex = this.allBlogs.findIndex(blog => blog.id === this.blogToDisplay.id);
      this.allBlogs[blogIndex].title = this.blogTitleInputValue.nativeElement.value;
      this.allBlogs[blogIndex].type = this.blogTypeDropdownValue.nativeElement.value;
      this.allBlogs[blogIndex].details = this.blogContentInputValue.nativeElement.value;
      this.blogDataService.blogsDataSubject.next(this.allBlogs);
      localStorage.setItem('blogsData', JSON.stringify(this.allBlogs));
      alert('Changes saved successfully!!');
    }
    else {
      let newBlog: BlogData = { id: this.allBlogs.length+1, title: this.blogTitleInputValue.nativeElement.value, type: this.blogTypeDropdownValue.nativeElement.value, details: this.blogContentInputValue.nativeElement.value};
      this.allBlogs.push(newBlog);
      this.blogDataService.blogsDataSubject.next(this.allBlogs);
      localStorage.setItem('blogsData', JSON.stringify(this.allBlogs));
      alert('New blog added successfully!!');
    }
    this.onClose();
  }
}
