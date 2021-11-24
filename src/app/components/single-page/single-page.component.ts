import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ListadoProductosComponent } from '../listado-productos/listado-productos.component';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss'],
  providers: [ListadoProductosComponent],
})
export class SinglePageComponent implements OnInit {

  producto:any = {};

  constructor(private _router: Router, private _activatedRoute:ActivatedRoute, private _listadoProductos:ListadoProductosComponent) {
    this._activatedRoute.params.subscribe(params => {

      this.producto = this._listadoProductos.getProducto(params['id']);

    });
  }

  ngOnInit(): void {
  }

}
