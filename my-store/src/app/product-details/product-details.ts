import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';
import { CartService } from '../cart.service';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.html',
  imports: [
    CurrencyPipe
  ],
  styleUrls: ['./product-details.css']
})
export class ProductDetails implements OnInit {

  product!: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = products.find(p => p.id === id);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Added to cart!');
  }
}
