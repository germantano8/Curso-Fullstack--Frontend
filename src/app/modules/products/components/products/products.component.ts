import { Component, OnInit } from '@angular/core';
import { ProductModel } from '@app/models/product.model';
import { ProductsService } from '@app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private _productsService:ProductsService) { }

  products: ProductModel[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this._productsService.getProducts().subscribe((products: ProductModel[]) => {
      this.products = products;
    });
  }

}
