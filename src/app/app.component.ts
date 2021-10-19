import { Component } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whee-store';

  constructor(public cartService: ShoppingCartService) {  }

  closeDrawer() {
    console.log("closed");
    this.cartService.cartOpen = false;
  }
}
