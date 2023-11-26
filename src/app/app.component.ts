import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogsDataService } from './services/blogs-data.service';
import { BlogData } from './models/blog-data.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public blogsDetails!: BlogData[];
  public blogToDisplay!: BlogData;
  public blogDataSubscription!: Subscription;
  
  constructor(private blogDataService: BlogsDataService) {
  }

  ngOnInit(): void {
    this.blogDataService.fetchBlogData();
    this.blogDataSubscription = this.blogDataService.blogsDataSubject.asObservable()
                                  .subscribe((blogs) => {
                                    this.blogsDetails = blogs;
                                  });
  }

  ngOnDestroy(): void {
    this.blogDataSubscription.unsubscribe();
  }

  /**
   * Function to fetch the details of blog by blogId received from blogId event emitter
   * @param $event - ID of the blog to be displayed
   */
  fetchBlogDetails(blogId: any): void {
    let blogIndex = this.blogsDetails.findIndex(blog => blog.id === blogId);
    this.blogToDisplay = this.blogsDetails[blogIndex];
  }
}
