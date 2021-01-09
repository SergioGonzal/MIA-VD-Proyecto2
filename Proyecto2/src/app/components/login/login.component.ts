import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicess/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hijos;
  tipoLogin:string = '';
  correo:string = '';
  pass:string = '';

  constructor(public LoginService: LoginService, private router:Router) { localStorage.setItem('id', 'S;G') }

  ngOnInit(): void {
  }

  async login(){
    if (this.tipoLogin == "1") {
      let respuesta = await this.LoginService.loginPadre(this.correo, this.pass);
      const obj = JSON.parse(JSON.stringify(respuesta));
      
      if (obj[0].auth == true) {
        localStorage.setItem('id', this.correo);
        this.router.navigate(['home']);
      }else if (obj[0].auth == false){
        window.alert("Contraseña incorrecta!");
      }else {	
        window.alert("Email incorrecto!");
      }

    }else if (this.tipoLogin == "2") {
      let respuesta = await this.LoginService.loginHijo(this.correo, this.pass);
      const obj = JSON.parse(JSON.stringify(respuesta));
      
      if (obj[0].auth == true) {
        localStorage.setItem('id', this.correo);
        this.router.navigate(['homeHijo']);
      }else if (obj[0].auth == false){
        window.alert("Contraseña incorrecta!");
      }else {	
        window.alert("Nickname incorrecto!");
      }
    }
  }
}
