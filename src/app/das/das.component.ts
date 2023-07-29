import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditarClienteComponent } from 'src/app/modal-editar-cliente/modal-editar-cliente.component'; 
import { ModalAgregarUsuarioComponent } from 'src/app/modal-agregar-usuario/modal-agregar-usuario.component'; // Import the ModalAgregarUsuarioComponent

import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


export interface Cliente {
  id: number;
  nombres: string;
  apellidos: string;
  email: string;
  contrasena: string;
  foto: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-das',
  templateUrl: './das.component.html',
  styleUrls: ['./das.component.css']
})
export class DasComponent  implements OnInit {
    displayedColumns: string[] = [
      'foto',
      'nombres',
      'apellidos',
      'email',
      'acciones',
    ];
    dataSource: Cliente[] = [];
    clienteEditando: any = {};
  
    constructor(private snackBar: MatSnackBar,private http: HttpClient,private dialog: MatDialog) {}
  
    ngOnInit(): void {
      this.obtenerClientes();
    }
  
    openModalAgregarUsuario() {
      const dialogRef = this.dialog.open(ModalAgregarUsuarioComponent, {
        width: '400px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.agregarUsuario(result);
        }
      });
    }
  
    agregarUsuario(nuevoUsuario: any) {
      this.http.post('http://127.0.0.1:8000/api/clientes', nuevoUsuario).subscribe(() => {
        // Actualizar la tabla después de agregar el nuevo usuario
        this.obtenerClientes();
      });
    }
  
    obtenerClientes() {
      const apiUrl = 'http://127.0.0.1:8000/api/clientes?limit=5';
  
      this.http.get<Cliente[]>(apiUrl).subscribe(
        (data) => {
          this.dataSource = data;
        },
        (error) => {
          console.error('Error al obtener los clientes:', error);
        }
      );
    }
 
  
  
  
  
  }
  