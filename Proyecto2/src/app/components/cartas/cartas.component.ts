import { Component, OnInit } from '@angular/core';
import { HijosService } from 'src/app/servicess/hijos.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {

  cartas;

  constructor(public HijosService:HijosService) { }

  ngOnInit(): void {
    this.getCartas();
  }

  async getCartas(){
    //localStorage.setItem('id', this.correo);
    var nombreH = localStorage.getItem('hijo');
    this.cartas = await this.HijosService.getCartas(nombreH);
    console.log(this.cartas);
  }

  async aceptarCarta(id){
    let respuesta = await this.HijosService.aceptarCarta(id);
    console.log(respuesta);
    this.getCartas();
  }
}
