import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss'],
})
export class SinglePageComponent implements OnInit {

  constructor(private _router: Router, private _activatedRoute:ActivatedRoute, private _serviceProducts:ProductsService) { }

  product!:ProductModel;

  ngOnInit(): void {
    this.getProduct(this._activatedRoute.snapshot.params['id']);
  }

  getProduct(id:string){
    this._serviceProducts.getProductById(id).subscribe(
      (data:ProductModel) => {
        this.product = data;
      }
    );
  }

}
