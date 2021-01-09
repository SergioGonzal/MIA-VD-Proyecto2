import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  url:string = "http://34.70.94.57:3000/crearPadreHijo";

  constructor(private httpClient: HttpClient) { }

  crearPadreHijo(email, nombrePadre, pass, telefono, dinero, departamento, municipio, detalle, nombreHijo, nickname, fecha, sexo){

    const data = {email, nombrePadre, pass, telefono, dinero, departamento, municipio, detalle, nombreHijo, nickname, fecha, sexo};

    return this.httpClient.post(this.url,data).toPromise();
  }
}
