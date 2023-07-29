import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
