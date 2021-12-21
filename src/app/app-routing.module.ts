import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/homepage/homepage.module').then((h) => h.HomepageModule) },
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then((p) => p.ProductsModule) },
  { path: 'products/add', loadChildren: () => import('./modules/products/products.module').then((p) => p.ProductsModule) },
  { path: 'products/:id', loadChildren: () => import('./modules/single-page/single-page.module').then((sp) => sp.SinglePageModule), },
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then((a) => a.AboutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
