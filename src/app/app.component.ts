import { Component, OnInit } from '@angular/core';
import { CourseDetails } from './models/course-details.model';
import { HttpClient } from '@angular/common/http';
import APP_CONSTANTS from 'src/app/constants/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public userName: string = 'Mouni';
  public courseDetailsData!: CourseDetails[];
  
  myConfig = [
    {
      "slidesToShow": 3,
      "slidesToScroll": 2,
      "autoplay": true
    }
  ];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchCourses();
  }
  
  private fetchCourses() {
    return this.http.get<CourseDetails>(APP_CONSTANTS.COURSE_DETAILS_MOCK_API)
                                  .subscribe(courses => console.log(courses));
  }




  // https://run.mocky.io/v3/5045b48c-4103-408f-9057-0aaaa20b78d0
}
