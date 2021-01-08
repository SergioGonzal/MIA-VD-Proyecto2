import { Component, OnInit } from '@angular/core';
import { SingupService } from 'src/app/servicess/singup.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  datos;
  nombrePadre:string = "";
  email:string = "";
  pass:string = "";
  telefono:string = "";
  dinero:string = "";
  departamento:string = "";
  municipio:string = "";
  detalle:string = "";
  nombreHijo:string = "";
  nickname:string = "";
  fecha:string = "";
  sexo:string = "";

  constructor(public SingupService: SingupService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('id'))
  }

  async crearPadreHijo(){
    let respuesta = await this.SingupService.crearPadreHijo(this.email, this.nombrePadre, this.pass, this.telefono, this.dinero, this.departamento, this.municipio, this.detalle, this.nombreHijo, this.nickname, this.fecha, this.sexo);
    console.log(respuesta);
  }
}
