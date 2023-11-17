import { Injectable } from '@angular/core';
import { CartArrayElement } from '../models/cart-array-element.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  public cartArray: BehaviorSubject<CartArrayElement[]> = new BehaviorSubject<CartArrayElement[]>([]);
}
