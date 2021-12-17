import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '@app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!:ProductModel;
  @Input() idProduct:string = '';

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  goToProduct(){
    this._router.navigate(['/products', this.idProduct]);
  }

}
