export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  providerId: number;
}

export const products = [
  { id: 1, name: 'Phone XL', price: 799, description: 'Big', providerId: 1 },
  { id: 2, name: 'Phone Mini', price: 699, description: 'Small', providerId: 1 },
  { id: 3, name: 'Phone Standard', price: 299, description: '', providerId: 2 }
];
