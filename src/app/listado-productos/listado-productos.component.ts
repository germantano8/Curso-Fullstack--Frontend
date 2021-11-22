import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onNavigate(){

  }

  productos = [
    { 
      id: 1,
      titulo: 'Card title', 
      descripcion: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 
      imagen: 'https://picsum.photos/300/150'
    },
  ];

}