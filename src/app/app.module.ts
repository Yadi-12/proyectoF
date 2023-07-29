import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { ClientesTableComponent } from './clientes-table/clientes-table.component';
import {RegistroComponent} from './registro/registro.component'

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalEditarClienteComponent } from './modal-editar-cliente/modal-editar-cliente.component';
import { ModalAgregarUsuarioComponent } from './modal-agregar-usuario/modal-agregar-usuario.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PrincipalComponent } from './principal/principal.component';
import { RegistrosComponent } from './registros/registros.component';

import { CommonModule } from '@angular/common';
import { DasComponent } from './das/das.component';
import { ModalVerUsuarioComponent } from './modal-ver-usuario/modal-ver-usuario.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    ClientesTableComponent,
    ModalEditarClienteComponent,
    ModalAgregarUsuarioComponent,
    RegistroComponent,
    PrincipalComponent,
    RegistrosComponent,
    DasComponent,
    ModalVerUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
