import { Component, OnInit } from '@angular/core';
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
    
    if(this.search.length>0){
      this._productsService.filterProducts(this.search);
      this.filtered=true;
    }
  }

  clearFilter(){
    this.search='';
    this.filtered=false;
    this._productsService.getProducts();
  }
  
}