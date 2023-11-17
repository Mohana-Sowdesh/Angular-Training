import { Component, Input, OnInit } from '@angular/core';
import APP_CONSTANTS from 'src/app/constants/app-constants';
import { CartArrayElement } from 'src/app/models/cart-array-element.model';
import { CourseDetails } from 'src/app/models/course-details.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'li-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit{
  @Input() course!: CourseDetails;
  public profileImgPath: string = APP_CONSTANTS.PROFILE_IMG_PATH;
  public cartArray: CartArrayElement[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartArray.asObservable()
          .subscribe((_cartArray) => {
            this.cartArray = _cartArray;
          });
  }

  /**
   * Function to push the selected course into cartArray if its newly added else increment the noOfItems 
   * property of already present course
   */
  addToCart(): void {
    // Find the index of the element if the course is already present in cartArray
    const index = this.cartArray.findIndex((cartElement) =>  
      cartElement.course.courseId === this.course.courseId
    );
    
    // Push the course into cartArray if its newly added else increment the noOfItems property of already present item
    index === -1 ?
    this.cartArray.push({ 'course': this.course, 'noOfItems': 1 }) :
    (this.cartArray[index].noOfItems = ++this.cartArray[index].noOfItems);

    this.cartService.cartArray.next(this.cartArray);
  }
}
