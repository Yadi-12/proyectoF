import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  currentUser: any; 
  showUsuariosContent = false;
  showRegistrosContent = false;
  showInicioContent = false;

  constructor(private router: Router, private userService: UserService) {
    this.currentUser = this.userService.getCurrentUser();
  }
  
  logout() {
    this.router.navigate(['/']);
  }

  toggleUsuariosContent() {
    this.showUsuariosContent = true;
    this.showRegistrosContent = false;
    this.showInicioContent = false; // Set other content flags to false
  }

  toggleRegistrosContent() {
    this.showUsuariosContent = false;
    this.showRegistrosContent = true;
    this.showInicioContent = false; // Set other content flags to false
  }

  toggleInicioContent() {
    this.showUsuariosContent = false;
    this.showRegistrosContent = false;
    this.showInicioContent = true; // Set the "Inicio" content flag to true
  }
}
