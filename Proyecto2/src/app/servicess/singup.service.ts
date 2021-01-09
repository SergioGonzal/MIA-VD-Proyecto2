import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  url:string = "http://34.70.94.57:3000/crearPadreHijo";
  url2:string = "http://34.70.94.57:3000/crearHijo";

  constructor(private httpClient: HttpClient) { }

  crearPadreHijo(email, nombrePadre, pass, telefono, dinero, departamento, municipio, detalle, nombreHijo, nickname, fecha, sexo){

    const data = {email, nombrePadre, pass, telefono, dinero, departamento, municipio, detalle, nombreHijo, nickname, fecha, sexo};

    return this.httpClient.post(this.url,data).toPromise();
  }

  crearHijo(email, nombreHijo, nickname, fecha, sexo){
    const data = {email, nombreHijo, nickname, fecha, sexo};
    console.log(data);
    return this.httpClient.post(this.url2,data).toPromise();
  }
}
