import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cart.html'
})
export class Cart {

  items = this.cart.getItems();

  checkoutForm = this.fb.group({
    name: '',
    address: ''
  });

  constructor(
    private cart: CartService,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    this.items = this.cart.clearCart();
    this.checkoutForm.reset();
    alert('Order submitted');
  }
}
