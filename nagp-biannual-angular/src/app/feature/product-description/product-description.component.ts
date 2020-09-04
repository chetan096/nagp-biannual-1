import { CartService } from './../../core/services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router) { }

  productId: number;

  ngOnInit(): void {
    console.log(this.route);
    this.productId = this.route.snapshot.params.id;
  }
  navigate() {
    this.cartService.addToCart(this.productId);
    this.router.navigate(['cart']);
  }
}
