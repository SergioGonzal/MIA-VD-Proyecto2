import { Component, OnInit } from '@angular/core';
import { HijosService } from 'src/app/servicess/hijos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hijos;
  nombre:string = "";

  constructor(public HijosService:HijosService) { }

  ngOnInit(): void {
    this.getHijos();
  }

  async getHijos(){
    //localStorage.setItem('id', this.correo);
    var email = localStorage.getItem('id');
    this.hijos = await this.HijosService.getHijos(email);
    console.log(this.hijos);
  }

  async verCartas(){
    localStorage.setItem('hijo', this.nombre);
    console.log(localStorage.getItem('hijo'));
  }

}
