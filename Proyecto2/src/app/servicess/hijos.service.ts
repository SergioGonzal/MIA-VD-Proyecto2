import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HijosService {

  url:string = "http://34.70.94.57:3000/getHijos";

  constructor(private httpClient: HttpClient) { }

  getHijos(email){
    const data = {email};

    return this.httpClient.post(this.url,data).toPromise();
  }
}
