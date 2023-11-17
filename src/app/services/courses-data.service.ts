import { Injectable } from '@angular/core';
import { CourseDetails } from '../models/course-details.model';
import APP_CONSTANTS from "src/app/constants/app-constants";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {
  public courseDetailsData: BehaviorSubject<CourseDetails[]> = new BehaviorSubject<CourseDetails[]>([]);
  public filterTags: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public searchKey: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { 
  }

  fetchCourses(): void {
     this.http
      .get<CourseDetails[]>(APP_CONSTANTS.TRENDING_COURSE_DETAILS_MOCK_API)
      .subscribe((courses) => {
        this.courseDetailsData.next(courses);
    });
  }

  setCourses(courses: CourseDetails[]) {
    this.courseDetailsData.next(courses);
  }
}
