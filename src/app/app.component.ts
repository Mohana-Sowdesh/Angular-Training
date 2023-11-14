import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CourseDetails } from './models/course-details.model';
import { HttpClient } from '@angular/common/http';
import APP_CONSTANTS from 'src/app/constants/app-constants';
import Swiper from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public userName: string = 'Mouni';
  public courseDetailsData!: CourseDetails[];
  public courseDetailsDataToShow: CourseDetails[] = [];
  private swiper!: Swiper;
  public pageSize = 5;
  public currentPage = 0;
  @ViewChild('prev') prevSliderButton!:ElementRef;
  @ViewChild('next') nextSliderButton!:ElementRef;
  
  constructor(private http: HttpClient, private el: ElementRef) {
    console.log(el, 'hscnsdcnkdfm');
  }

  ngOnInit(): void {
    this.fetchCourses()    
  }
  
  ngAfterViewInit() {
    this.updateDisplayedData();
    console.log(this.courseDetailsDataToShow);
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

    this.swiper = new Swiper(this.el.nativeElement.querySelector('.recommended-courses'), {
      // Swiper configuration options
      navigation: {
        nextEl: '.slider-next-navigation-arrow',
        prevEl: '.slider-prev-navigation-arrow',
      },
      // Other configuration options...
    });
    console.log(this.swiper);
    
    
    // const swiper = new Swiper('.swiper-container', {
    // });

    // console.log(swiper);
    // document.addEventListener('DOMContentLoaded', () => {
    //   const nextButtonEl = this.nextSliderButton;

      this.nextSliderButton.nativeElement.addEventListener('click', () => {
        console.log(this.swiper);
        // swiper.slideNext();
      });
    // });
  }

  private updateDisplayedData() {
    // Calculate the start index based on the current page and page size
    const startIndex = this.currentPage * this.pageSize;
    console.log(startIndex, this.pageSize);
    console.log(this.courseDetailsData);
    
    // Slice the array to get the current page of data to display
    this.courseDetailsDataToShow = this.courseDetailsData.slice(startIndex, startIndex + this.pageSize);
    console.log(this.courseDetailsDataToShow);
    
  }

  onNextClick() {
    // Increment the current page
    this.currentPage++;

    // If the current page exceeds the maximum number of pages, go back to the first page
    if (this.currentPage >= Math.ceil(this.courseDetailsData.length / this.pageSize)) {
      this.currentPage = 0;
    }

    // Update the displayed data
    this.updateDisplayedData();
  }

  onPrevClick() {
    // Decrement the current page
    this.currentPage--;

    // If the current page is less than 0, go to the last page
    if (this.currentPage < 0) {
      this.currentPage = Math.max(0, Math.ceil(this.courseDetailsData.length / this.pageSize) - 1);
    }

    // Update the displayed data
    this.updateDisplayedData();
  }

  shuffleArray(array:any[]) {
    return array.sort(() => Math.random() - 0.5);
  }
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
     this.http.get<CourseDetails[]>(APP_CONSTANTS.COURSE_DETAILS_MOCK_API)
                                  .subscribe(courses => {
                                    this.courseDetailsData = this.shuffleArray(courses);
                                    this.updateDisplayedData();
                                    console.log(JSON.stringify(courses));
                                    console.log(this.courseDetailsData);
                                    
                                  });
    
  }
}
