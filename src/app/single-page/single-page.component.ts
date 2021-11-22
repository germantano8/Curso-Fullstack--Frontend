import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {

  producto='';
  constructor(private _router: Router, private _activatedRoute:ActivatedRoute) {
    console.log(this._activatedRoute.snapshot.params);
    this.producto = this._activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
