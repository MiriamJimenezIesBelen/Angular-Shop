import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

// Creamos una interfaz extendida para incluir la cantidad de manera limpia
export interface CartItem extends Product {
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {

  items: CartItem[] = [];

  constructor(private http: HttpClient) {}

  // Ahora recibe el producto y la cantidad seleccionada desde los botones (+ / -)
  addToCart(p: Product, quantity: number) {
    const existingItem = this.items.find(item => item.id === p.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...p, quantity: quantity });
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
