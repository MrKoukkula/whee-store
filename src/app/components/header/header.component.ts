import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideNavOpen = false;

  constructor(public cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  openCart(): void {
    this.cartService.cartOpen = true;
  }

}
