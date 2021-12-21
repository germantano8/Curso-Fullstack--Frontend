import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SupplierModel, SupplierModelResponse, SupplierModelSingleResponse } from '@app/models/supplier.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<SupplierModel[]> {
    return this.http.get<SupplierModelResponse>(`${ this.url }/proveedores`).pipe(
      map( (res) => res.data )
    );
  };

  getSupplierById(id:string) : Observable<SupplierModel> {
    return this.http.get<SupplierModelSingleResponse>(`${this.url}/proveedores/${id}`).pipe(map(res => res['data']));
  }
}
