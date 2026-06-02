import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { products } from '../products';
import { ProductAlerts } from '../product-alerts/product-alerts';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,RouterLink, ProductAlerts],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products = products;

  share() {
    alert('The product has been shared!');
  }

  onNotify() {
    alert('You will be notified when the product goes on sale');
  }
}
