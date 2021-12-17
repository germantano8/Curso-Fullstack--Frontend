import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ]
})

export class ProductsModule { }