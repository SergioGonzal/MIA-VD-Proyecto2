import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HijosService {

  url:string = "http://34.70.94.57:3000/getHijos";
  url2:string = "http://34.70.94.57:3000/getCartas";
  url3:string = "http://34.70.94.57:3000/aceptarCarta";

  constructor(private httpClient: HttpClient) { }

  getHijos(email){
    const data = {email};

    return this.httpClient.post(this.url,data).toPromise();
  }

  getCartas(nombre){
    const data = {nombre};

    return this.httpClient.post(this.url2,data).toPromise();
  }

  aceptarCarta(id){
    const data = {id};

    return this.httpClient.post(this.url3,data).toPromise();
  }
}
