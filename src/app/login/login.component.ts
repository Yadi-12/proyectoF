import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string =''; // Asegúrate de declarar la propiedad 'email' y su tipo
  password: string ='';
  isLoading: boolean = false;

  constructor(private userService: UserService,private router: Router,private http: HttpClient) {}

  ngOnInit(): void {}
  async onLoginButtonClick() {
    this.isLoading = true;
  
    try {
      const clientes = await this.http.get<any[]>('http://127.0.0.1:8000/api/clientes').toPromise();
  
      if (clientes && clientes.length > 0) {
        const foundClient = clientes.find(cliente => cliente.email === this.email && cliente.contrasena === this.password);
  
        if (foundClient) {
          this.userService.setCurrentUser(foundClient);
          this.router.navigate(['/inicio']);
        } else {
          // SweetAlert2 para el mensaje de usuario no encontrado
        Swal.fire({
          icon: 'error',
          title: 'Acceso denegado',
          text: 'Verifique usuario y contraseña',
        });
        }
      } else {
         // SweetAlert2 para el mensaje de lista vacía de clientes
      Swal.fire({
        icon: 'info',
        title: 'Información',
        text: 'No se encontraron clientes en la lista.',
      });
      }
    } catch (error) {
      console.error('Error al obtener la lista de clientes:', error);
    // SweetAlert2 para el mensaje de error al obtener la lista de clientes
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al obtener la lista de clientes',
    });
    } finally {
      this.isLoading = false;
    }
    
  }
  
  login() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }
}
