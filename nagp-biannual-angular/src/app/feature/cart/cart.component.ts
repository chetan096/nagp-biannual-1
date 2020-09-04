import { CartService } from './../../core/services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private cartService: CartService) { }
  cart;
  cartTotal = 0;

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    // if (this.cart) {
    //   for (let i = 0; i < this.cart.length; i++) {
    //     console.log(this.cart[i]);
    //     this.cartTotal = this.cartTotal + this.cart[i].price;
    //   }
    // }
  }

  increaseQuantity(id) {
    console.log(id + 'increase');
    this.cartService.increaseQuantity(id);
  }

  decreaseQuantity(id) {
    console.log(id + 'increase');
    this.cartService.decreaseQuantity(id);
  }

  deleteProduct(id) {
    this.cartService.deleteProduct(id);
  }
}
