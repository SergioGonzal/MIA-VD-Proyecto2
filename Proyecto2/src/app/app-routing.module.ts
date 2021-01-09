import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SingupComponent } from './components/singup/singup.component';
import { CartasComponent } from './components/cartas/cartas.component';
import { AgregarHijoComponent } from './components/agregar-hijo/agregar-hijo.component';

const routes: Routes = [
{ 
  path: '', 
  component: LoginComponent 
},
{ 
  path: 'home', 
  component: HomeComponent 
},
{
  path: 'singup',
  component: SingupComponent
},
{
  path: 'cartas',
  component: CartasComponent
},
{
  path: 'agregarhijo',
  component: AgregarHijoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
