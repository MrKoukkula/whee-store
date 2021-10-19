import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public cartOpen: boolean;

  private productsInCart$: CartItem[];

  constructor() { }

  getShoppingCart(): Observable<CartItem[]> {
    return of(this.productsInCart$);
  }

  postToShoppingCart(product: Product): Observable<CartItem[]> {
    if (!product) {
      return;
    }

    this.productsInCart$ = this.productsInCart$.map(item => {
      if (item.product.id === product.id) {
        item.amount++;
      } else {
        return {
          amount: 1,
          product,
        } as CartItem;
      }
      return item;
    });

    return of(this.productsInCart$);

  }
}
