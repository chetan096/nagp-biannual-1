import { Injectable } from '@angular/core';
import { filter } from 'minimatch';
import { ProductService } from '@app/core/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [];

  constructor(private productService: ProductService) { }

  addToCart(id) {
    const filterProduct = this.getProductFromCart(id);
    const product = this.productService.getProduct(id);
    if (filterProduct.length > 0) {
      console.log(filterProduct);
      filterProduct[0].quantity++;
    } else {
      this.cart.push({ id, quantity: 1, price: product.price });
    }
    console.log(this.cart);
  }

  increaseQuantity(id) {
    const filterProduct = this.getProductFromCart(id);
    if (filterProduct.length > 0) {
      filterProduct[0].quantity++;
    }
  }

  getProductFromCart(id) {
    const filterProduct = this.cart.filter(product => {
      console.log(product);
      if (product.id === id) {
        return true;
      }
      return false;
    });
    return filterProduct;
  }

  decreaseQuantity(id) {
    const filterProduct = this.getProductFromCart(id);
    if (filterProduct.length > 0) {
      if (filterProduct[0].quantity > 1) {
        filterProduct[0].quantity--;
      } else {
        console.log(this.getIndex(id));
        this.cart.splice(this.getIndex(id), 1);
      }
    }
  }

  getIndex(id) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id === id) {
        return i;
      }
    }
  }

  getCart() {
    return this.cart;
  }

  deleteProduct(id) {
    console.log(this.getIndex(id));
    this.cart.splice(this.getIndex(id), 1);
  }
}
