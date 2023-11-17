import { Component, Input, OnInit } from '@angular/core';
import { CourseDetails } from 'src/app/models/course-details.model';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import APP_MESSAGES from 'src/app/constants/app-messages';

@Component({
  selector: 'li-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.scss']
})
export class CoursesContainerComponent implements OnInit {
  @Input() courseHeading!: string;
  public courseDetailsData!: CourseDetails[];
  public currentPage: number = 0;
  public pageSize: number = 5;
  public courseDetailsDataToShow!: CourseDetails[];
  public disablePrevButton: boolean = false;
  public disableNextButton: boolean = false;
  public filterTags: string[] = [];
  public searchKey: string = '';
  public noResultFoundMsg: string = APP_MESSAGES.NO_RESULT_FOUND;

  constructor(private coursesDataService: CoursesDataService ) {
  }

  ngOnInit(): void {
    this.coursesDataService.courseDetailsData.asObservable()
                          .subscribe((courses) => { 
                            this.courseDetailsData = courses;
                            this.updateDisplayedData();
                          });
    this.coursesDataService.filterTags.asObservable()
                          .subscribe((tags) => {
                              this.filterTags = tags; 
                              this.updateDisplayedData();                     
                          });
    this.coursesDataService.searchKey.asObservable()
                          .subscribe((_searchKey) => {
                              this.searchKey = _searchKey;
                              this.updateDisplayedData();
                          })
  }

  /**
   * Filters based on the search key and selected badges. Applies pagination logic on the filtered output
   */
  private updateDisplayedData(): void {
    const startIndex = this.currentPage * this.pageSize;
    
    this.courseDetailsDataToShow = this.courseDetailsData.filter((course) => 
                                              this.filterTags.length === 0 ||
                                              this.getCommonTags(course.tags, this.filterTags).length == this.filterTags.length
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

  /**
   * Function to check if the iterating course tags are matching with the badges selected by the user
   * @param tagList1 - Tag list of the currently iterating course
   * @param tagList2 - Badges array consisting of the badges selected by the user
   * @returns - String array which contains common tags between tagList1 and tagList2
   */
  private getCommonTags(tagList1: string[], tagList2: string[]): string[] {
    const set1 = new Set(tagList1.map((tag) => tag.toLowerCase()));
    const set2 = new Set(tagList2.map((tag) => tag.toLowerCase()));

    let resultSet = [];
    for(const set1Element of set1) {
      if(set2.has(set1Element))
        resultSet.push(set1Element);
    }
    return resultSet;
  }
}
