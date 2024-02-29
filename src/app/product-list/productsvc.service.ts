import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from './iproduct';

@Injectable()
export class ProductsvcService {


  constructor(private http: HttpClient) {

   }
  getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('assets/products.json')
      .pipe(map(resp => {
        return <IProduct[]>resp;
      }))
  }
}
