import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() producto:any;
  @Input() index:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verProducto(idx: number) {
    this.router.navigate(["/producto", idx]);
  }

}
