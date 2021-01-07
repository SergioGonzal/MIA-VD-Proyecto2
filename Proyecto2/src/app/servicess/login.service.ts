import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

}
