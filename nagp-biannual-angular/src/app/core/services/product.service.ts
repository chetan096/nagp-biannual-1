import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {
      name: 'Product 1',
      price: 100,
      description: 'Description',
      id: 1
    },
    {
      name: 'Product 2',
      price: 100,
      description: 'Description',
      id: 2
    },
    {
      name: 'Product 3',
      price: 100,
      description: 'Description',
      id: 3
    }
  ];
  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct(id) {
    console.log(id);
    const filterProduct = this.products.filter(product => {
      if (product.id + '' === id + '') {
        return true;
      }
      return false;
    });
    return filterProduct[0];
  }
}
