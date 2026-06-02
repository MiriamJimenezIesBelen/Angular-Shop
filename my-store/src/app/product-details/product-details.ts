import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {

  private route = inject(ActivatedRoute);
  private cart = inject(CartService);

  product?: Product;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = products.find(p => p.id === id);
  }

  addToCart(product: Product) {
    this.cart.addToCart(product);
    alert('Added to cart');
  }
}
