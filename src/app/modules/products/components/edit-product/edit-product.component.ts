import { Component, OnInit } from '@angular/core';
import { ProductModel } from '@app/models/product.model';
import { ProductsService } from '@app/services/products.service';
import { SuppliersService } from '@app/services/suppliers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierModel } from '@app/models/supplier.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product!:ProductModel;
  suppliers:SupplierModel[] = [];
  required:boolean = false;
  loaded:boolean = false;

  constructor(private _serviceProducts:ProductsService, 
              private _serviceSuppliers:SuppliersService, 
              private _activatedRoute:ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void {
    this.getProduct(this._activatedRoute.snapshot.params['id']);
    this.getSuppliers();
  }

  getProduct(id:string){
    this._serviceProducts.getProductById(id).subscribe(
      (data:ProductModel) => {
        this.product = data;
        this.loaded = true;
      }
    );
  }

  getSuppliers(){
    this._serviceSuppliers.getSuppliers().subscribe((suppliers: SupplierModel[]) => {
      this.suppliers = suppliers;
    } );
  }

  save(){
    if(this.isValid()){
      this._serviceProducts.updateProduct(this.product).subscribe(() => {
        this._router.navigate(['/products', this.product._id]);
      });
    }
  }

  cancel(){
    this._router.navigate(['/products', this.product._id]);
  }

  isValid(){
    if(this.product.title && this.product.image && this.product.price>0 && this.product.idSupplier){
      return true;
    }else{
      this.required=true;
      return false;
    }
  }

}
