import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  constructor(private router: Router) { }

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

  ngOnInit(): void {
  }

  navigate(id) {
    console.log(id);
    this.router.navigate(['products/' + id]);
  }
}
