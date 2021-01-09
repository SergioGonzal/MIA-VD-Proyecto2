import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SingupService } from 'src/app/servicess/singup.service';

@Component({
  selector: 'app-agregar-hijo',
  templateUrl: './agregar-hijo.component.html',
  styleUrls: ['./agregar-hijo.component.css']
})
export class AgregarHijoComponent implements OnInit {

  nombreHijo:string = "";
  nickname:string = "";
  fecha:string = "";
  sexo:string = "";

  constructor(public SingupService: SingupService, private router:Router) { }

  ngOnInit(): void {
  }

  async crearHijo(){
    let respuesta = await this.SingupService.crearHijo(localStorage.getItem('id'), this.nombreHijo, this.nickname, this.fecha, this.sexo);
    console.log(respuesta);
    this.router.navigate(['home']);
  }
}
