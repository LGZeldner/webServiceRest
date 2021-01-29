import { Injectable } from '@angular/core';
import {DbapiService} from './dbapi.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/* методы для таблицы products */
export class ProductsApiService extends DbapiService {
  header: HttpHeaders;
  url = 'products';
  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set ('Content-type', 'application/json');
  }
  getProducts () {
    return  this.get (this.url, this.header).toPromise();
  }
  postProducts (data) {
    return this.post (this.url, data, this.header).toPromise();
  }
  putProducts (id: number, data) {
    return this.put (`${this.url}/${id}`, data, this.header).toPromise();
  }
  deleteProducts (id: number) {
    return this.delete (`${this.url}/${id}`, this.header).toPromise();
  }
}
