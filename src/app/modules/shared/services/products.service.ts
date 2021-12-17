import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel, ProductModelSingleResponse, ProductModelResponse } from '@app/models/product.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = environment.baseUrl;

  initialProducts:ProductModel[] = [];
  products$: BehaviorSubject<ProductModel[]> = new BehaviorSubject(this.initialProducts);

  constructor(private http: HttpClient) { }

  getProducts() : Observable<ProductModel[]> {
    // return this.http.get<ProductModelResponse>(`${this.url}/products`).pipe(map(res => res['data']));
    this.http.get<ProductModelResponse>(`${this.url}/products`).subscribe( 
      (res) => {this.products$.next(res.data as ProductModel[])});
    return this.products$.asObservable();
  }

  getProductById(id:string) : Observable<ProductModel> {
    return this.http.get<ProductModelSingleResponse>(`${this.url}/products/${id}`).pipe(map(res => res['data']));
  }
  
  filterProducts(text:string) {
    const filteredProducts = this.products$.value.filter(product => product.title.toLowerCase().includes(text));
    this.products$.next(filteredProducts);
  }
}
