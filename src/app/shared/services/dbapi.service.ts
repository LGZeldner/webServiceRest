import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
/* методы для обмена информацией с сервером */
export class DbapiService {
  private baseUrl = "http://localhost:3000/";

  constructor(public httpClient: HttpClient) { }
  private getUrl (url:string) {
    return this.baseUrl + url;
  }
  public get(url: string, header: HttpHeaders) {
    let requestOptions = {
      headers: header
    };
    return this.httpClient.get (this.getUrl(url), requestOptions);
  }
  public post (url: string, data, header: HttpHeaders) {
    let requestOptions = {
      headers: header
    };
    return this.httpClient.post (this.getUrl(url), data, requestOptions);
  }
  public put (url: string, data, header: HttpHeaders) {
    let requestOptions = {
      headers: header
    };
    return this.httpClient.put (this.getUrl(url), data, requestOptions);
  }
  public delete (url: string, header: HttpHeaders) {
    let requestOptions = {
      headers: header
    };
    return this.httpClient.delete (this.getUrl(url), requestOptions);
  }
}
