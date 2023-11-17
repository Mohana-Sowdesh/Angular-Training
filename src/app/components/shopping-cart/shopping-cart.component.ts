import { Component, OnInit } from '@angular/core';
import APP_CONSTANTS from 'src/app/constants/app-constants';
import APP_MESSAGES from 'src/app/constants/app-messages';
import { CartArrayElement } from 'src/app/models/cart-array-element.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'li-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {
  public shoppingCartImgPath: string = APP_CONSTANTS.SHOPPING_CART_IMG_PATH;
  public purchaseMotivationMsg: string = APP_MESSAGES.PURCHASE_MOTIVATION_MSG;
  public cartArray: CartArrayElement[] = [];
  public totalItemsInCart: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartArray.asObservable()
          .subscribe((_cartArray) => {
              this.cartArray = _cartArray;
              this.calculateTotalItemsPresent();
          });
  }

  /**
   * Function to calculate the no. of items present in cart
   */
  calculateTotalItemsPresent(): void {
    this.totalItemsInCart = 0;
    this.cartArray.map((cartElement) => {
      this.totalItemsInCart += cartElement.noOfItems;
    });
  }
}
