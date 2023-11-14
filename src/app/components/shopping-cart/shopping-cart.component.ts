import { Component } from '@angular/core';
import APP_CONSTANTS from 'src/app/constants/app-constants';

@Component({
  selector: 'li-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent {
  public shoppingCartImgPath: string = APP_CONSTANTS.SHOPPING_CART_IMG_PATH;
}
