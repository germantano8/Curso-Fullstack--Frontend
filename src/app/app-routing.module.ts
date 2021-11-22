import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { SinglePageComponent } from './single-page/single-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'productos', component: ListadoProductosComponent,
    // children: [{ path: ':id', component: SinglePageComponent }] 
  },
  { path: 'productos/:id', component: SinglePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
