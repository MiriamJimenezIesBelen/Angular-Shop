export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  providerId: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 16',
    price: 999,
    description: 'Apple smartphone',
    providerId: 1
  },
  {
    id: 2,
    name: 'Samsung Galaxy S25',
    price: 899,
    description: 'Samsung smartphone',
    providerId: 2
  },
  {
    id: 3,
    name: 'Google Pixel 9',
    price: 799,
    description: 'Google smartphone',
    providerId: 3
  },

  {
    id: 4,
    name: 'Iphone XS',
    price: 499,
    description: 'Iphone',
    providerId: 1
  },

  {
    id: 5,
    name: 'Iphone 15',
    price: 999,
    description: 'Iphone',
    providerId: 1
  },

];
