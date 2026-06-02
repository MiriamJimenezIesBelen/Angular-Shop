import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { Cart } from './cart/cart';
import { Shipping } from './shipping/shipping';

export const routes: Routes = [
  {
    path: '',
    component: ProductList,
    title: 'Home'
  },
  {
    path: 'products/:productId',
    component: ProductDetails,
    title: 'Product details'
  },
  {
    path: 'cart',
    component: Cart
  },
  {
    path: 'shipping',
    component: Shipping
  }
];
