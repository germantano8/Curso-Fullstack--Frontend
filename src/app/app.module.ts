import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { SinglePageComponent } from './components/single-page/single-page.component';

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
