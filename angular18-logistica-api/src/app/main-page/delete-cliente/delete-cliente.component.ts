import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-cliente',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './delete-cliente.component.html',
  styleUrl: './delete-cliente.component.css'
})
export class DeleteClienteComponent {
  constructor(public dialogRef: MatDialogRef<DeleteClienteComponent>) {

  }

  delete() {
    this.dialogRef.close(true);
  }
  close() {
    this.dialogRef.close(false);

  }
}