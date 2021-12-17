import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePageRoutingModule } from './single-page-routing.module';
import { SinglePageComponent } from './components/single-page/single-page.component';


@NgModule({
  declarations: [
    SinglePageComponent,
  ],
  imports: [
    CommonModule,
    SinglePageRoutingModule,
  ]
})
export class SinglePageModule { }
