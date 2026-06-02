import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  templateUrl: './product-alerts.html'
})
export class ProductAlerts {

  @Input() product!: Product;
  @Output() notify = new EventEmitter();
}
