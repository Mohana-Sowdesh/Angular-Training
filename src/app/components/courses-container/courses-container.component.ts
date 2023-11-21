import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CourseDetails } from 'src/app/models/course-details.model';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import APP_MESSAGES from 'src/app/constants/app-messages';
import { Subscription } from 'rxjs';

@Component({
  selector: 'li-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.scss']
})
export class CoursesContainerComponent implements OnInit, OnDestroy {
  @Input() courseHeading!: string;
  public courseDetailsData!: CourseDetails[];
  public currentPage: number = 0;
  public pageSize: number = 5;
  public courseDetailsDataToShow!: CourseDetails[];
  public disablePrevButton: boolean = false;
  public disableNextButton: boolean = false;
  public filterTags: number[] = [];
  public searchKey: string = '';
  public coursesSubscription !: Subscription;
  public tagsSubscription !: Subscription;
  public searchKeySubscription !: Subscription;
  readonly noResultFoundMsg: string = APP_MESSAGES.NO_RESULT_FOUND;

  constructor(private coursesDataService: CoursesDataService ) {
  }

  ngOnInit(): void {
    this.coursesSubscription = this.coursesDataService.courseDetailsData.asObservable()
                                  .subscribe((courses) => { 
                                    this.courseDetailsData = courses;
                                    this.updateDisplayedData();
                                  });
    this.tagsSubscription = this.coursesDataService.filterTags.asObservable()
                                .subscribe((tags) => {
                                    this.filterTags = tags; 
                                    this.updateDisplayedData();                     
                                });
    this.searchKeySubscription = this.coursesDataService.searchKey.asObservable()
                                  .subscribe((_searchKey) => {
                                      this.searchKey = _searchKey;
                                      this.updateDisplayedData();
                                  });
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
    this.tagsSubscription.unsubscribe();
    this.searchKeySubscription.unsubscribe();
  }

  /**
   * Filters based on the search key and selected badges. Applies pagination logic on the filtered output
   */
  private updateDisplayedData(): void {
    const startIndex = this.currentPage * this.pageSize;
    
    this.courseDetailsDataToShow = this.courseDetailsData.filter((course) => 
                                              this.filterTags.length === 0 ||
                                              this.filterTags.every(tag => course.tags.includes(tag))
                                      ).filter((course) => 
                                        this.searchKey.length === 0 || (course.courseInstructorName.toLowerCase().includes(this.searchKey) || course.courseTitle.toLowerCase().includes(this.searchKey))
                                      )
                                      .slice(startIndex, startIndex + this.pageSize);

    const totalPages = Math.ceil(this.courseDetailsData.length / this.pageSize);
    this.disablePrevButton = this.currentPage === 0;
    this.disableNextButton = this.currentPage >= totalPages - 1;
  }

  /**
   * Function triggred when next page is clicked where the current page value is incremented
   */
  onNextClick(): void {
    this.currentPage++;
    this.updateDisplayedData();
  }

  /**
   * Function triggred when previous page is clicked where the current page value is decremented
   */
  onPrevClick(): void {
    this.currentPage = Math.max(0, this.currentPage - 1);
    this.updateDisplayedData();
  }
}
