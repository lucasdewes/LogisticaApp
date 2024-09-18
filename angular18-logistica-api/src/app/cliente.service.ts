import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private path = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  getCliente(index:number): Observable<Cliente> {
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.get<Cliente>(this.path + 'Cliente/GetClienteById/'+index, {headers: header, withCredentials: true })
  }

  getAllClientes(): Observable<Cliente[]> {
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.get<Cliente[]>(this.path + 'Cliente/GetClientes', {headers: header, withCredentials: true })
  }

  addCliente(cliente : Cliente): any {
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.post(this.path + "Cliente/AddCliente", JSON.stringify(Cliente), { headers: header })
  }

  deleteCliente(cliente: number): any {
    return this.httpClient.delete(this.path + "Cliente/DeleteCliente/" + cliente)
  }

  editCliente(cliente: Cliente): any {
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.put(this.path + "Cliente/EditCliente", JSON.stringify(cliente), { headers: header })
  }

}
