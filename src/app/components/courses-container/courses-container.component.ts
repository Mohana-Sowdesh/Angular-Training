import { AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CourseDetails } from 'src/app/models/course-details.model';

@Component({
  selector: 'li-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.scss']
})
export class CoursesContainerComponent implements OnInit, OnChanges{
  @Input() courseHeading!: string;
  @Input() courseDetailsData!: CourseDetails[];
  public currentPage: number = 0;
  public pageSize: number = 5;
  public courseDetailsDataToShow!: CourseDetails[];
  public disablePrevButton: boolean = false;
  public disableNextButton: boolean = false;
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["courseDetailsData"]) {
      this.updateDisplayedData();
    }
  }
  
  ngAfterContentInit(): void {
    // this.updateDisplayedData();
  }
  ngOnInit(): void {
    this.courseDetailsData && this.updateDisplayedData();
  }

  ngAfterViewInit() {
    // console.log(this.courseDetailsData);
    // this.updateDisplayedData();
    
  }
  private updateDisplayedData() {
    const startIndex = this.currentPage * this.pageSize;
    this.courseDetailsDataToShow = this.courseDetailsData.slice(startIndex, startIndex + this.pageSize);
    const totalPages = Math.ceil(this.courseDetailsData.length / this.pageSize);
    this.disablePrevButton = this.currentPage === 0;
    this.disableNextButton = this.currentPage >= totalPages - 1;
    console.log(this.courseDetailsData);
    
    console.log(this.courseDetailsDataToShow);
    
  }

  onNextClick() {
    this.currentPage++;
    this.updateDisplayedData();
  }

  onPrevClick() {
    this.currentPage = Math.max(0, this.currentPage - 1);
    this.updateDisplayedData();
  }
}
