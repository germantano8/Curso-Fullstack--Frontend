import { Component, OnInit } from '@angular/core';
import { ProductModel } from '@app/models/product.model';
import { ProductsService } from '@app/services/products.service';
import { SuppliersService } from '@app/services/suppliers.service';
import { Router } from '@angular/router';
import { SupplierModel } from '@app/models/supplier.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product:ProductModel = {} as ProductModel;
  suppliers:SupplierModel[] = [];
  required:boolean = false;

  constructor(private _serviceProducts:ProductsService, 
              private _serviceSuppliers:SuppliersService,
              private _router:Router) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers(){
    this._serviceSuppliers.getSuppliers().subscribe((suppliers: SupplierModel[]) => {
      this.suppliers = suppliers;
      console.log(this.suppliers)
    } );
  }

  save(){
    if(this.isValid()){
      this._serviceProducts.addProduct(this.product).subscribe(() => {
        this._router.navigate(['/products']);
      });
    }
  }

  cancel(){
    this._router.navigate(['/products']);
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
