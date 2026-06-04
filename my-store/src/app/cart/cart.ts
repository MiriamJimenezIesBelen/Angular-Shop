import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CartService, CartItem } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {

  items: CartItem[] = [];

  checkoutForm;

  constructor(
    private cart: CartService,
    private fb: FormBuilder
  ) {
    this.items = this.cart.getItems();

    this.checkoutForm = this.fb.group({
      name: [''],
      address: ['']
    });
  }

  increase(item: CartItem) {
    item.quantity++;
  }

  decrease(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      // Si llega a 0, eliminar del carrito
      this.cart.removeItem(item);
      this.items = this.cart.getItems();
    }
  }

  onSubmit() {
    this.items = this.cart.clearCart();
    this.checkoutForm.reset();
    alert('Order submitted');
  }

}
