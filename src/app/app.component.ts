import { Component, ElementRef } from "@angular/core";
import APP_CONSTANTS from "src/app/constants/app-constants";
import { CoursesDataService } from "./services/courses-data.service";
 
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})

export class AppComponent {
  public userName: string = APP_CONSTANTS.USERNAME;

  constructor(private el: ElementRef, private coursesData: CoursesDataService) {}

  ngOnInit() {
    this.coursesData.fetchCourses();
  }
 
}