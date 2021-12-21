import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '@app/models/product.model';
import { ProductsService } from '@app/services/products.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss'],
})
export class SinglePageComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute, 
              private _serviceProducts:ProductsService, 
              private _router:Router,) { }

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

  updateProduct(){
    this._router.navigate(['/products/editProduct', this.product._id]);

  }

  deleteProduct(){
    if(confirm("Estás seguro de querer eliminar este producto?")) {
      this._serviceProducts.deleteProduct(this.product._id).subscribe(
        (data:ProductModel) => {
          this.product = data;
          this._router.navigate(['/products']);
        }
      );
    }
  }

}
