import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageComponent } from './components/single-page/single-page.component';

const routes: Routes = [
  {
    path: '', // Este path ya hace referencia al products/:id
    component: SinglePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePageRoutingModule { }