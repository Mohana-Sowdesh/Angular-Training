import { Component } from '@angular/core';
import { SHOPPING_CART_IMG_PATH } from 'src/app/constants/app-constants';

@Component({
  selector: 'li-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent {
  public shoppingCartImgPath: string = SHOPPING_CART_IMG_PATH;
}
