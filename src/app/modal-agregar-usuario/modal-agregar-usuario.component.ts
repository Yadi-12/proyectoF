// modal-agregar-usuario.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-agregar-usuario',
  templateUrl: './modal-agregar-usuario.component.html',
  styleUrls: ['./modal-agregar-usuario.component.css']
})
export class ModalAgregarUsuarioComponent {

  nuevoUsuario: any = {}; // Objeto para almacenar los datos del nuevo usuario

  constructor(
    public dialogRef: MatDialogRef<ModalAgregarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
