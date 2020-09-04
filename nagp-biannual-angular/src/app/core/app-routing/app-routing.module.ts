import { CartComponent } from './../../feature/cart/cart.component';
import { ProductDisplayComponent } from './../../feature/product-display/product-display.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDescriptionComponent } from '@app/feature/product-description/product-description.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductDisplayComponent
  },
  {
    path: 'products/:id',
    component: ProductDescriptionComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
