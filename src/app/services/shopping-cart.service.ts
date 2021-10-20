import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public cartOpen: boolean;
  itemsInCart = 0;
  totalSum = 0;

  private productsInCart$: CartItem[] = [];

  constructor() { }

  getShoppingCart(): Observable<CartItem[]> {
    return of(this.productsInCart$);
  }

  postToShoppingCart(product: Product): Observable<CartItem[]> {
    if (!product) {
      return;
    }

    if (this.productsInCart$.find(i => i.product.id === product.id)) {
      this.productsInCart$ = this.productsInCart$.map(item => {
        if (item.product.id === product.id) {
          item.amount++;
        }
        return item;
      });
    } else {
      const newItem = {
        amount: 1,
        product,
      } as CartItem;
      this.productsInCart$.push(newItem);
    }
    console.log(this.productsInCart$);
    this.countItems();
    this.countTotalSum();
    return of(this.productsInCart$);
  }

  countItems(): void {
    let allItems = 0;
    this.productsInCart$.forEach(item => {
      allItems = allItems + item.amount;
    });
    console.log(allItems);
    this.itemsInCart = allItems;
  }

  countTotalSum(): void {
    if (this.productsInCart$ === undefined) { return; }

    let sum = 0;
    this.productsInCart$.forEach(item => {
      sum = sum + item.amount * item.product.price;
    });
    this.totalSum = sum;
    console.log(sum);
  }
}
