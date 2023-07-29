import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditarClienteComponent } from 'src/app/modal-editar-cliente/modal-editar-cliente.component'; 
import { ModalAgregarUsuarioComponent } from 'src/app/modal-agregar-usuario/modal-agregar-usuario.component'; // Import the ModalAgregarUsuarioComponent

import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ModalVerUsuarioComponent } from 'src/app/modal-ver-usuario/modal-ver-usuario.component';



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
  selector: 'app-clientes-table',
  templateUrl: './clientes-table.component.html',
  styleUrls: ['./clientes-table.component.css'],
})
export class ClientesTableComponent implements OnInit {
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
  verUsuario(usuario: Cliente) {
    this.dialog.open(ModalVerUsuarioComponent, {
      width: '400px',
      data: usuario, // Pasar los datos del usuario al diálogo
    });
  }
  agregarUsuario(nuevoUsuario: any) {
    this.http.post('http://127.0.0.1:8000/api/clientes', nuevoUsuario).subscribe(() => {
      // Actualizar la tabla después de agregar el nuevo usuario
      this.obtenerClientes();
    });
  }

  obtenerClientes() {
    const apiUrl = 'http://127.0.0.1:8000/api/clientes';

    this.http.get<Cliente[]>(apiUrl).subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    );
  }
  eliminarCliente(id: number) {
    // Utilizar SweetAlert2 para la confirmación
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar este cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // El usuario hizo clic en "Sí, eliminar"
        this.http.delete(`http://127.0.0.1:8000/api/clientes/${id}`).subscribe(() => {
          // Actualizar la tabla después de eliminar el registro
          this.obtenerClientes();
          this.snackBar.open('Cliente eliminado con éxito.', 'Cerrar', { duration: 4000 });
        });
      }
    });
  }





  editarCliente(cliente: any) {
    this.clienteEditando = { ...cliente }; // Crear una copia de los datos del cliente para editar
    this.openModal();
  }

  guardarCambios() {
    this.http.put(`http://127.0.0.1:8000/api/clientes/${this.clienteEditando.id}`, this.clienteEditando).subscribe(() => {
      // Actualizar la tabla después de editar el cliente
      this.obtenerClientes();
      this.clienteEditando = {}; // Limpiar el objeto de edición
      this.closeModal();
    });
  }


  openModal() {
    const dialogRef = this.dialog.open(ModalEditarClienteComponent, {
      width: '400px',
      data: this.clienteEditando
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.guardarCambios();
      } else {
        // Si el usuario cierra el modal sin guardar cambios, limpiar el objeto de edición
        this.clienteEditando = {};
      }
    });
  }

  closeModal() {
    this.dialog.closeAll();
  }

}
