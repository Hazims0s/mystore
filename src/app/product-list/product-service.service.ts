import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from  '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from '../shared/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  constructor(private http: HttpClient) { }
  getProducts():Observable<Product[]>{
   return this.http.get<Product[]>('../../assets/data.json');
  }
}
