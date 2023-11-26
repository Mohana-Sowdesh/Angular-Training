import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import APP_CONSTANTS from '../constants/app-constants';
import { BlogData } from '../models/blog-data.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsDataService {
  public blogsDataSubject: BehaviorSubject<BlogData[]> = new BehaviorSubject<BlogData[]>([]);
  public searchKey: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public blogTagsSelected: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  readonly blogData: string = JSON.stringify(APP_CONSTANTS.BLOG_DATA);

  constructor() { }

  /**
   * Function to store blogs data in local storage
   */
  fetchBlogData(): void {
    if(localStorage.getItem('blogsData')===null) {
      localStorage.setItem('blogsData', this.blogData);
      this.blogsDataSubject.next(APP_CONSTANTS.BLOG_DATA);
    }
    else {
      let serializedBlogData = localStorage.getItem('blogsData');
      if (serializedBlogData) {
        let localStorageBlogData = JSON.parse(serializedBlogData);
        this.blogsDataSubject.next(localStorageBlogData);
      }
    }
  }
}
