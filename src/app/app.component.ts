import { Component, ElementRef, OnInit } from "@angular/core";
import { CourseDetails } from "./models/course-details.model";
import { HttpClient } from "@angular/common/http";
import APP_CONSTANTS from "src/app/constants/app-constants";
import Swiper from "swiper";
import { CoursesDataService } from "./services/courses-data.service";
 
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})

export class AppComponent {
  public userName: string = "Mouni";

  constructor(private el: ElementRef, private coursesData: CoursesDataService) {}

  ngOnInit() {
    this.coursesData.fetchCourses();
  }
 
}