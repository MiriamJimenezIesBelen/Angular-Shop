import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping.html'
})
export class Shipping {

  private cart = inject(CartService);

  shippingCosts = this.cart.getShippingPrices();
}
