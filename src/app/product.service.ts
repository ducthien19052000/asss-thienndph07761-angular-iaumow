import { Injectable } from '@angular/core';
import {Product} from "./Product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductService {
  api="https://5e7febfb7a92ed001656095b.mockapi.io/product";
  constructor(
     private http :HttpClient
  ) { }
  
    getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.api);

  }
}