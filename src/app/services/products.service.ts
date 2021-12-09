import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel, ProductModelSingleResponse, ProductModelResponse } from '../models/product.model';
import { map, Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'https://curso-fullstack-gt.herokuapp.com';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<ProductModel[]> {
    return this.http.get<ProductModelResponse>(`${this.url}/products`).pipe(map(res => res['data']));
  }

  getProductById(id:string) : Observable<ProductModel> {
    return this.http.get<ProductModelSingleResponse>(`${this.url}/products/${id}`).pipe(map(res => res['data']));
  }
}
