import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // Variables para enlazar con los campos de registro en el formulario
  nombre: string='';
  apellido: string='';
  email: string='';
  password: string='';
  isLoading: boolean = false;
  constructor(private snackBar: MatSnackBar,private http: HttpClient) {}

  // Función para manejar la lógica de registro
  register() {
    console.log('Nombre :', this.nombre);
    console.log('Apellido :', this.apellido);
    console.log('Email:', this.email);
    console.log('Contraseña:', this.password);
    // Crea un nuevo objeto cliente con los datos del formulario
    const nuevoCliente = {
      nombres: this.nombre,
      apellidos: this.apellido,
      email: this.email,
      contrasena: this.password,
      foto: 'http://www.bluebellphysio.co.uk/wp-content/uploads/2015/08/person-icon.png', // Suponiendo que esta es una URL de foto predeterminada
    };
    // Realiza una solicitud HTTP POST a tu API para crear un nuevo cliente
    const apiUrl = 'http://127.0.0.1:8000/api/clientes';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post<any>(apiUrl, nuevoCliente, httpOptions).subscribe(
      (response) => {
        console.log('Respuesta de la API:', response);

        // Manejar el éxito: muestra un mensaje en el snackbar
        this.snackBar.open('¡Registro exitoso!', 'Cerrar', { duration: 4000 });
      },
      (error) => {
        console.error('Error de la API:', error);

        // Manejar el error: muestra un mensaje en el snackbar con los detalles del error
        this.snackBar.open('Error al registrar cliente', 'Cerrar', { duration: 4000 });
      }
    );

    // Lógica adicional según tus necesidades
    setTimeout(() => {
      this.isLoading = false;
      this.snackBar.open('¡Registro exitoso!', 'Cerrar', { duration: 4000 });
    }, 500);
  }
  onRegisterButtonClick() {
    this.isLoading = true;
    this.register();

  }
}
