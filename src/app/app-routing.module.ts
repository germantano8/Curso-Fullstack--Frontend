import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { SinglePageComponent } from './components/single-page/single-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'productos', component: ListadoProductosComponent,
    // children: [{ path: ':id', component: SinglePageComponent }] 
  },
  { path: 'producto/:id', component: SinglePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
