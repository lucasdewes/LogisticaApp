import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-create-cliente',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './create-cliente.component.html',
  styleUrl: './create-cliente.component.css'
})
export class CreateClienteComponent {


clienteObj: Cliente | undefined
  isEdit:boolean = false

  countryForm = new FormGroup({
    countryName: new FormControl(''),
    selectFormControl: new FormControl(0)
  })

  // sexo: Sexo[] = [
  //   {sexoId: 1, sexoName: 'Masculino'},
  //   {sexoId: 2, sexoName: 'Feminino'}
  // ];


}
