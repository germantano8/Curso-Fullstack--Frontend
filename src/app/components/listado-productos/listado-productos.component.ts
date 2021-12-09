import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {

  constructor(private router: Router, private productsService: ProductsService) {
  }

  products:ProductModel[] = [];
  loading:Boolean = false;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productsService.getProducts().subscribe((products: ProductModel[]) => {
      this.products = products;
    });
  }

  onNavigate(){

  }

}