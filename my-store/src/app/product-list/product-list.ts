import { Component } from '@angular/core';
import { products } from '../products';
import {RouterLink} from '@angular/router';
import {ProductAlertsComponent} from '../product-alerts/product-alerts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  imports: [
    RouterLink,
    ProductAlertsComponent
  ],
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
