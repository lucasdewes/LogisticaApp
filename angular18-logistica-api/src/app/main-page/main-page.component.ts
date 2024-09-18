import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { Cliente } from '../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ClienteService } from '../cliente.service';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { DeleteClienteComponent } from './delete-cliente/delete-cliente.component';

const constClienteData: Cliente[] = [];

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MaterialModule],  //componente tem acesso
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {

  displayedColumns: string[] = ['clienteId', 'clienteNome', 'dataNascimento', 'sexo', 'enderecoId']
  dataSource = constClienteData;
  isEdit: boolean = false

  constructor(private service: ClienteService, private route: ActivatedRoute, private _router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.GetAllClientes()
  }

  clickedRow(row: any) {
    this._router.navigate(['/cliente-individual', row.clienteId])
  }

  addCliente() {
    let dialogRef = this.dialog.open(CreateClienteComponent, {
      data: {
        row: { clienteId: 0, clienteNome: '', dataNascimento: '', sexo: '', endereco: { enderecoId: 0, cep: '', logradouro: '', numero: '', complemento: '', bairro: '', cidade: '', uf: '', clienteId: '' } },
        isEdit: false
      },
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (!null) {
        this.service.addCliente(res.data).subscribe({
          next: (x: any) => {
            this.GetAllClientes()
            console.log('Dialog foi fechado');
          },
          error: (e: any) => {
            console.warn(e)
          }
        })
      }
      else {
        console.log('Dialog foi fechado');
      }

    });
  }

  editCliente(row:Cliente){
    let dialogRef = this.dialog.open(CreateClienteComponent, {
      data: {
        row:row,
        isEdit:true
      },
    });

    dialogRef.afterClosed().subscribe((res:any) => {
      if(res != null){
        this.service.editCliente(res.data).subscribe({
          next: (x:any)=> {
            this.GetAllClientes()
            console.log('Dialog foi fechado');
          },
          error: (e:any) => {
            console.warn(e)
          }
        })
      }

    });
  }

  deleteCliente(row:Cliente){
    var clienteId = row.clienteId
    let dialogRef = this.dialog.open(DeleteClienteComponent, {});

    dialogRef.afterClosed().subscribe((res:any) => {
      if(res == true ){
        this.service.deleteCliente(clienteId).subscribe({
          next: (x:any)=> {
            this.GetAllClientes()
            console.log('Dialog foi fechado');
          },
          error: (e:any) => {
            console.warn(e)
          }
        })
      }
      else{
        console.log('Dialog foi fechado');
      }

    });
  }

  GetAllClientes(){
    this.service.getAllClientes()
    .subscribe({
      next: (x:Cliente[]) => {
      this.dataSource = x
    },
      error: (e:any) => {
        console.warn(e)
      }
    })
  }
}