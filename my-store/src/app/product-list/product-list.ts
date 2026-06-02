import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../products';
import { ProductAlerts } from '../product-alerts/product-alerts';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, ProductAlerts],
  templateUrl: './product-list.html'
})
export class ProductList {
  products = products;

  share() {
    alert('shared');
  }

  onNotify() {
    alert('notify');
  }
}
