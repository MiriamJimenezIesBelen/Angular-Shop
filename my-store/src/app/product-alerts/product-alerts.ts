import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  templateUrl: './product-alerts.html',
  imports: [CommonModule]
})
export class ProductAlerts {

  @Input() product!: Product;

  @Output() notify = new EventEmitter<void>();
}
