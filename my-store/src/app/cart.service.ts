import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {

  items: CartItem[] = [];

  constructor(private http: HttpClient) {}

  addToCart(p: Product, quantity: number = 1) {
    const existingItem = this.items.find(item => item.id === p.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...p, quantity });
    }
  }

  removeItem(item: CartItem) {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
