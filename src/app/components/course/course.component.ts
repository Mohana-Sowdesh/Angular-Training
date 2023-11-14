import { Component, Input, OnInit } from '@angular/core';
import APP_CONSTANTS from 'src/app/constants/app-constants';
import { CourseDetails } from 'src/app/models/course-details.model';

@Component({
  selector: 'li-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  public profileImgPath: string = APP_CONSTANTS.PROFILE_IMG_PATH;
  @Input() course!: CourseDetails;

}
