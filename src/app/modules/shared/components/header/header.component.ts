import { Component, OnInit } from '@angular/core';
import { ProductModel } from '@app/models/product.model';
import { ProductsService } from '@app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search:string = '';
  filtered:boolean = false;

  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
  }

  filterProducts($event:any){
    $event.preventDefault();
    this.search=this.search.trim().toLowerCase();
    
    this._productsService.filterProducts(this.search);
    this.filtered=true;
  }

  reset(){
    this.search='';
    this.filtered=false;
    this._productsService.getProducts();
  }
  
}