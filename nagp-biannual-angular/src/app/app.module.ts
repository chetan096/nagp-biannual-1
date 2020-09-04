import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/feature/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/core/app-routing/app-routing.module';
import { ProductDisplayComponent } from './feature/product-display/product-display.component';
import { ProductDescriptionComponent } from './feature/product-description/product-description.component';
import { CartComponent } from './feature/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    ProductDescriptionComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
