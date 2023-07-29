// modal-ver-usuario.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cliente } from '../clientes-table/clientes-table.component';

@Component({
  selector: 'app-modal-ver-usuario',
  templateUrl: './modal-ver-usuario.component.html',
  styleUrls: ['./modal-ver-usuario.component.css'],
})
export class ModalVerUsuarioComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    private dialogRef: MatDialogRef<ModalVerUsuarioComponent>
  ) {}

  cerrarDialogo() {
    this.dialogRef.close();
  }
}
