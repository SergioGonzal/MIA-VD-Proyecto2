import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SingupComponent } from './components/singup/singup.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
