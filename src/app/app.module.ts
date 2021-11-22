import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { SinglePageComponent } from './single-page/single-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadoProductosComponent,
    HomepageComponent,
    FooterComponent,
    SinglePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
