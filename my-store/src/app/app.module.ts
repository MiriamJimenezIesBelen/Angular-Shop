import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { TopBar } from './top-bar/top-bar';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { ProductAlerts } from './product-alerts/product-alerts';
import { Cart } from './cart/cart';
import { Shipping } from './shipping/shipping';

@NgModule({
  declarations: [
    App,
    TopBar,
    ProductList,
    ProductDetails,
    ProductAlerts,
    Cart,
    Shipping
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductList },
      { path: 'products/:productId', component: ProductDetails },
      { path: 'cart', component: Cart },
      { path: 'shipping', component: Shipping }
    ])
  ],
  bootstrap: [App]
})
export class AppModule {}
