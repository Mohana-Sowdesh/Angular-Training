import { Component, ElementRef } from "@angular/core";
import APP_CONSTANTS from "src/app/constants/app-constants";
import APP_MESSAGES from "src/app/constants/app-messages";
import { CoursesDataService } from "./services/courses-data.service";
 
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})

export class AppComponent {
  readonly userName: string = APP_CONSTANTS.USERNAME;
  readonly trendingCoursesTitle = APP_MESSAGES.TRENDING_COURSES_TITLE;
  readonly recommendedForYouTitle = APP_MESSAGES.RECOMMENDED_FOR_YOU_TITLE;

  constructor(private coursesData: CoursesDataService) {}

  ngOnInit() {
    this.coursesData.fetchCourses();
  }
 
}