import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cart.postToShoppingCart(this.product);
  }

}
