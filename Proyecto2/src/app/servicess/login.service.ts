import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allowedNodeEnvironmentFlags } from 'process';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url1:string = "http://34.70.94.57:3000/loginPadre";
  url2:string = "http://34.70.94.57:3000/loginHijo"
  
  constructor(private httpClient: HttpClient) { }
  
  loginPadre(email, password){
    
    const data = {email, password};

    return this.httpClient.post(this.url1, data).toPromise();
  }

  loginHijo(nickname, password){

    const data = {nickname, password};
    
    return this.httpClient.post(this.url2, data).toPromise();
  }
}
