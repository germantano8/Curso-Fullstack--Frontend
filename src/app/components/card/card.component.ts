import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product!:ProductModel;
  @Input() idProduct!:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProduct(){
    this.router.navigate(['/products', this.idProduct]);
  }

}
