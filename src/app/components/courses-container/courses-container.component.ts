import { AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CourseDetails } from 'src/app/models/course-details.model';
import { CoursesDataService } from 'src/app/services/courses-data.service';

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

  constructor(private coursesDataService: CoursesDataService ) {
  }

  ngOnInit(): void {
    this.coursesDataService.courseDetailsData.asObservable()
                          .subscribe((courses) => { 
                            this.courseDetailsData = courses;
                            this.updateDisplayedData();
                            // console.log(this.courseDetailsData);
                          });
    this.coursesDataService.filterTags.asObservable()
                          .subscribe((tags) => {
                              this.filterTags = tags; 
                              this.updateDisplayedData();                     
                          });
    this.coursesDataService.searchKey.asObservable()
                          .subscribe((_searchKey) => {
                              this.searchKey = _searchKey;
                              console.log(this.searchKey);  
                              this.updateDisplayedData();
                          })
  }

  private updateDisplayedData() {
    const startIndex = this.currentPage * this.pageSize;
    // console.log(this.filterTags);
    console.log(this.searchKey);
    
    this.courseDetailsDataToShow = this.courseDetailsData.filter((course) => 
                                              this.filterTags.length === 0 ||
                                              this.getCommonTags(course.tags, this.filterTags).length == this.filterTags.length
                                      ).filter((course) => 
                                        this.searchKey.length === 0 || (course.courseInstructorName.toLowerCase().includes(this.searchKey) || course.courseTitle.toLowerCase().includes(this.searchKey))
                                      )
                                      .slice(startIndex, startIndex + this.pageSize);
    // console.log(this.courseDetailsDataToShow);
    // console.log(this.courseDetailsData);
    
    const totalPages = Math.ceil(this.courseDetailsData.length / this.pageSize);
    this.disablePrevButton = this.currentPage === 0;
    this.disableNextButton = this.currentPage >= totalPages - 1;
  }

  onNextClick() {
    this.currentPage++;
    this.updateDisplayedData();
  }

  onPrevClick() {
    this.currentPage = Math.max(0, this.currentPage - 1);
    this.updateDisplayedData();
  }

  private getCommonTags(tagList1: string[], tagList2: string[]) {
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
