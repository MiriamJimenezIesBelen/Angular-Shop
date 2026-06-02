import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.html',
  styleUrls: ['./product-alerts.css']
})
export class ProductAlerts {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
}
