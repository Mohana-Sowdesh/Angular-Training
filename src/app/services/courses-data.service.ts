import { Injectable } from '@angular/core';
import { CourseDetails } from '../models/course-details.model';
import APP_CONSTANTS from "src/app/constants/app-constants";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {
  public courseDetailsData: BehaviorSubject<CourseDetails[]> = new BehaviorSubject<CourseDetails[]>([]);
  public filterTags: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public searchKey: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private apiService: ApiService) { 
  }

  /**
   * Function to fetch data from mock API
   */
  fetchCourses() {
    //  this.http
    //   .get<CourseDetails[]>(APP_CONSTANTS.TRENDING_COURSE_DETAILS_MOCK_API)
    //   .subscribe((courses) => {
    //     this.courseDetailsData.next(courses);
    // });
    let courseDetailsObservable = this.apiService.fetchDataFromAPI(APP_CONSTANTS.TRENDING_COURSE_DETAILS_MOCK_API);
    courseDetailsObservable.subscribe((courses) => this.courseDetailsData.next(courses));
    console.log(this.courseDetailsData);
    
    // this.courseDetailsData.next(courseDetails);
  }
}
