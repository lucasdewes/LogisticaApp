import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Cliente } from '../../models/cliente.model';
import { Endereco } from '../../models/endereco.model';
import { ClienteService } from '../../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-individual',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './cliente-individual.component.html',
  styleUrl: './cliente-individual.component.css'
})
export class ClienteIndividualComponent {
  clienteObj: Cliente = new Cliente(0, "", new Date(), "", new Endereco(0, "", "", "", "", "", "", "", 0));

  constructor(private service: ClienteService, private route: ActivatedRoute, private _router: Router) { }


  ngOnInit(): void {
    this.service.getCliente(Number(this.route.snapshot.paramMap.get('index')!))
      .subscribe({
        next: (x: Cliente) => {
          this.clienteObj = x
        },
        error: (e) => {
          console.warn(e)
        }
      })
  }

  goMainPage() {
    this._router.navigate([''])
  }

}
