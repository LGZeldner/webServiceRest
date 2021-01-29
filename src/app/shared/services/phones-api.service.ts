import { Injectable } from '@angular/core';
import {DbapiService} from './dbapi.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/* методы для таблицы phones */
export class PhonesApiService extends DbapiService {
  header: HttpHeaders;
  url = 'phones';
  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set ('Content-type', 'application/json');
  }
  getPhones () {
    return  this.get (this.url, this.header).toPromise();
  }
  postPhones (data) {
    return this.post (this.url, data, this.header).toPromise();
  }
  putPhones (id: number, data) {
    return this.put (`${this.url}/${id}`, data, this.header).toPromise();
  }
  deletePhones (id: number) {
    return this.delete (`${this.url}/${id}`, this.header).toPromise();
  }
}
