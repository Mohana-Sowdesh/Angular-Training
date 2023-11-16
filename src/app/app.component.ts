import { Component, ElementRef, OnInit } from "@angular/core";
import { CourseDetails } from "./models/course-details.model";
import { HttpClient } from "@angular/common/http";
import APP_CONSTANTS from "src/app/constants/app-constants";
import Swiper from "swiper";
 
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})

export class AppComponent implements OnInit {
  public userName: string = "Mouni";
  public trendingCourseDetailsData: CourseDetails[] = [];
  public recommendedCourseDetailsData: CourseDetails[] = [];
  // public trendingCourseDetailsDataToShow: CourseDetails[] = [];
  // public recommendedCourseDetailsDataToShow: CourseDetails[] = [];
  // public courseDetailsData = {
  //   trending: {
  //     data: this.trendingCourseDetailsData,
  //     toShow: this.trendingCourseDetailsDataToShow,
  //     disablePrevButton: false,
  //     disableNextButton: false,
  //   },
  //   recommended: {
  //     data: this.recommendedCourseDetailsData,
  //     toShow: this.recommendedCourseDetailsDataToShow,
  //     disablePrevButton: false,
  //     disableNextButton: false,
  //   },
  // };
  // private swiper!: Swiper;
  // public trendingCoursesPageSize = 5;
  // public trendingCoursesCurrentPage = 0;
  // public recommendedCoursesPageSize = 5;
  // public recommendedCoursesCurrentPage = 0;
  // @ViewChild("prev") prevSliderButton!: ElementRef;
  // @ViewChild("next") nextSliderButton!: ElementRef;
 
  constructor(private http: HttpClient, private el: ElementRef) {}
 
  ngOnInit(): void {
    this.fetchCourses();
  }
 
  ngAfterViewInit() {
    // this.updateDisplayedData();
    // console.log(this.courseDetailsDataToShow);
    // this._swiper = new Swiper(this.el.nativeElement.querySelector('.swiper-container'), {
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   }
    // });
    // const swiperEl = document.querySelector('swiper-container');
    // const prevButtonEl = document.getElementById('prevSliderButton');
    // const nextButtonEl = document.getElementById('nextSliderButton');
    // prevButtonEl?.addEventListener('click', () => {
    //   console.log('Hello dcjknksckdsnkjcds');
    //   swiperEl?.swiper.slidePrev();
    // });
    // nextButtonEl?.addEventListener('click', () => {
    //   console.log('Hellogsxgjasx');
    //   swiperEl?.swiper.slideNext();
    // })
    // this.swiper = new Swiper(this.el.nativeElement.querySelector('.recommended-courses'), {
    //   // Swiper configuration options
    //   navigation: {
    //     nextEl: '.slider-next-navigation-arrow',
    //     prevEl: '.slider-prev-navigation-arrow',
    //   },
    //   // Other configuration options...
    // });
    // console.log(this.swiper);
    // const swiper = new Swiper('.swiper-container', {
    // });
    // console.log(swiper);
    // document.addEventListener('DOMContentLoaded', () => {
    //   const nextButtonEl = this.nextSliderButton;
    // this.nextSliderButton.nativeElement.addEventListener('click', () => {
    //   console.log(this.swiper);
    // swiper.slideNext();
    // });
    // });
  }
 
  // private updateDisplayedData(
  //   currentPage: number,
  //   pageSize: number,
  //   courseDetailsData: CourseDetailsData
  // ) {
  //   const startIndex = currentPage * pageSize;
  //   courseDetailsData.toShow = courseDetailsData.data.slice(
  //     startIndex,
  //     startIndex + pageSize
  //   );
    // console.log(courseDetailsDataToShow);
 
    // console.log(courseDetailsData.toShow);
    // console.log(this.recommendedCourseDetailsDataToShow);
 
    // Update Button states
    // const totalPages = Math.ceil(courseDetailsData.data.length / pageSize);
 
  //   courseDetailsData.disablePrevButton = currentPage === 0;
  //   courseDetailsData.disableNextButton = currentPage >= totalPages - 1;
  // }
 
  // onNextClick(
  //   currentPage: number,
  //   pageSize: number,
  //   courseDetailsData: CourseDetailsData
  // ) {
  //   currentPage++;
  //   this.updateDisplayedData(currentPage, pageSize, courseDetailsData);
  // }
 
  // onPrevClick(
  //   currentPage: number,
  //   pageSize: number,
  //   courseDetailsData: CourseDetailsData
  // ) {
  //   currentPage = Math.max(0, currentPage - 1);
  //   this.updateDisplayedData(currentPage, pageSize, courseDetailsData);
  // }
 
  // onNextClick() {
  //   // if (this.swiper) {
  //   //   this.swiper.slideNext();
  //   // }
  //   this.courseDetailsDataToShow = this.courseDetailsData.
  // }
 
  // // Custom method to go to the previous slide
  // onPrevClick() {
  //   if (this.swiper) {
  //     this.swiper.slidePrev();
  //   }
  // }
 
  private fetchCourses() {
    this.http
      .get<CourseDetails[]>(APP_CONSTANTS.TRENDING_COURSE_DETAILS_MOCK_API)
      .subscribe((courses) => {
        this.trendingCourseDetailsData = courses;
        console.log(this.trendingCourseDetailsData);
        // this.courseDetailsData.trending.data = courses;
        // this.updateDisplayedData(
        //   this.trendingCoursesCurrentPage,
        //   this.trendingCoursesPageSize,
        //   this.courseDetailsData.trending
        // );
      });
 
    this.http
      .get<CourseDetails[]>(APP_CONSTANTS.RECOMMENDED_COURSE_DETAILS_MOCK_API)
      .subscribe((courses) => {
        this.recommendedCourseDetailsData = courses;
        console.log(this.recommendedCourseDetailsData);
        // this.courseDetailsData.recommended.data = courses;
        // this.updateDisplayedData(
        //   this.recommendedCoursesCurrentPage,
        //   this.recommendedCoursesPageSize,
        //   this.courseDetailsData.recommended
        // );
      });
  }
}