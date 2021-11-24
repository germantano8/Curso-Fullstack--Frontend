import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onNavigate(){

  }

  verProducto(idx: number) {
    this.router.navigate(["/producto", idx]);
  }

  getProducto(idx: number) {
    return this.productos[idx];
  }

  productos = [
    {
      titulo: 'Card title', 
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imagen: 'https://picsum.photos/300/300',
      precio: '$100',
    },
    {
      titulo: 'Card title', 
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imagen: 'https://picsum.photos/300/300',
      precio: '$100',
    },
    {
      titulo: 'Card title', 
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imagen: 'https://picsum.photos/300/300',
      precio: '$100',
    },
    {
      titulo: 'Card title', 
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imagen: 'https://picsum.photos/300/300',
      precio: '$100',
    },
    {
      titulo: 'Card title', 
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imagen: 'https://picsum.photos/300/300',
      precio: '$100',
    },
  ];

}

export interface Producto {
  titulo:string;
  descripcion:string;
  imagen:string;
  idx?: number;
}