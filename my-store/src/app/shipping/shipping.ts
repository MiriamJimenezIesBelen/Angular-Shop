import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.html',
  imports: [
    CurrencyPipe
  ],
  styleUrls: ['./shipping.css']
})
export class Shipping implements OnInit {

  shippingCosts!: Observable<{type: string, price: number}[]>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
