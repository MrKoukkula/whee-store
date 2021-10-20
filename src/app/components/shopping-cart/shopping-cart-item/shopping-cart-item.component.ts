import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() cartItem: CartItem;

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  amountChanged(e): void {
    e.preventDefault();
    this.cartItem.amount = Number(e.target.value);
    this.cart.changeAmount(this.cartItem);
  }

  removeFromCart(): void {
    this.cart.removeFromCart(this.cartItem);
  }

}
