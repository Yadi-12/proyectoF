// modal-editar-cliente.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-editar-cliente',
  templateUrl: './modal-editar-cliente.component.html',
  styleUrls: ['./modal-editar-cliente.component.css']
})
export class ModalEditarClienteComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalEditarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
